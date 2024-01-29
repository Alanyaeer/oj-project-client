import { ar } from 'element-plus/es/locale'
import { TrackOpTypes } from 'vue'
import {ref, Ref} from 'vue'
export const picLoading = (myRef:  Ref<boolean>, times: number = 1000 ) => {
    myRef.value = true
    setTimeout(() => {
        myRef.value  = false
        // return true;
    }, times)
}
export const picWithFunLoading = (myRef:  Ref<boolean>, fn: Function, times: number = 1000, ) => {
    myRef.value = true
    const newFn = (... args: any[]) => {
        setTimeout(() => {
            myRef.value  = false
            setTimeout(() => {
                
                fn(... args)
                
            }, 200)
        }, times)
    }
    return newFn
}
/**
 * 
 * @param fn 传入一个函数 
 * @param myRef 接受一个响应式数据
 * @returns 记得一定要带上() 来调用这个函数
 */
export const funLoading = (myRef: Ref<boolean>, fn: Function) => {
    const showLoading = () => {
        myRef.value = true;
    };

    const hideLoading = () => {
        setTimeout(() => {
            
            myRef.value = false;
        }, 100)
    };

    const newFn = async (...args: any[]) => {
        try {
            showLoading();

            const result = fn(...args);

            const isPromise = result instanceof Promise;

            if (isPromise) {
                // 使用 await 等待 Promise 完成
                const resolvedResult = await result;
                hideLoading();
                return resolvedResult;
            } else {
                return result
                    .then((res) => {
                        hideLoading();
                        return res;
                    })
                    .catch((err) => {
                        hideLoading();
                        throw err;
                    })
            }
        } catch (err) {
            // 防止出现异常问题
            hideLoading();
            return err;
        }
    };

    return newFn;
};