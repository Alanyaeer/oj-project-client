
<script>
import { getCurrentInstance, onMounted, watch } from 'vue';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.main.js';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
// 解决vite Monaco提示错误
self.MonacoEnvironment = {
    getWorker() {
        return new JsonWorker();
    },
};
export default {
    props: {
        value: String,
    },
    setup(props,{ emit }) {
        let monacoEditor = null;
        const { proxy } = getCurrentInstance();

        watch(
            () => props.value,
            (value) => {
                // 防止改变编辑器内容时光标重定向
                if (value !== monacoEditor?.getValue()) {
                    monacoEditor.setValue(value);
                }
            },
        );

        onMounted(() => {
            monacoEditor = monaco.editor.create(proxy.$refs.editContainer, {
                value: props.value,
                readOnly: false,
                language: 'cpp',
                theme: 'vs',
                selectOnLineNumbers: true,
                renderSideBySide: false,
            });
            // 监听值变化
            monacoEditor.onDidChangeModelContent(() => {
                const currenValue = monacoEditor?.getValue();
                emit('update:value', currenValue);
            });
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
    width: 100%;
    min-height: 570px;
}
</style>


