
<script>
import { getCurrentInstance, onMounted, watch } from 'vue';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.main.js';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import {debounce} from '@/utils/optimizeUtils'
// 解决vite Monaco提示错误
self.MonacoEnvironment = {
    getWorker() {
        return new JsonWorker();
    },
};
export default {
    props: {
        value: String,
        language: Number
    },
    setup(props,{ emit }) {
        let monacoEditor = null;
        const { proxy } = getCurrentInstance();

        watch(
            () => props.value,
            (value) => {
                // 防止改变编辑器内容时光标重定向
                console.log(value);
                if (value !== monacoEditor?.getValue()) {
                    monacoEditor.setValue(value);
                }
            },
        );
        watch(
            () => props.language,
            (value)=>{
                console.log(value);
            }
        )
        const changeSize =  (entries) => {
            // 获取编辑器容器的大小
            var objSz  = entries[0]
            monacoEditor.layout({ height: objSz.contentRect.height, width: objSz.contentRect.width - 10});
        }
        // 节流操作
        const _fn = debounce(changeSize, 10)
        onMounted(() => {
            monacoEditor = monaco.editor.create(proxy.$refs.editContainer, {
                value: props.value,
                readOnly: false,
                language: 'cpp',
                theme: 'vs',
                selectOnLineNumbers: true,
                renderSideBySide: false,
                minimap: { // 关闭代码缩略图
                    enabled: false // 是否启用预览图
                },
            });
            // 监听值变化
            monacoEditor.onDidChangeModelContent(() => {
                const currenValue = monacoEditor?.getValue();
                emit('update:value', currenValue);
            });
            monacoEditor.layout({
                    width: 600,
                    height: 600
                }
            )
            var code = document.getElementsByClassName('code-editor')[0]
            var resizeObserver = new ResizeObserver(function(entries) {
                _fn(entries)
            });

            // 监听特定元素
            resizeObserver.observe(code);
        });
        return {};
    },
};
</script>
<template>
    <div ref="editContainer" class="code-editor"></div>
</template>
<style scoped>
.code-editor {
    height: auto;
    width: 100%;
    min-height: 570px;
    overflow-y: hidden;
}
</style>


