/**
 * 
 * @param {*} blob 
 * @param {*} filename 
 * @param {*} types 
 * @returns 
 * @note blob转file格式
 */
export function blobToFile(blob,filename, types='text/html') {
    return new File([blob], filename, { type: types })
}
export function dataURLtoBlob(dataurl, filename) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}
export function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
}
/**
 * 
 * @param {*} data 
 * @param {*} type 
 * @returns 
 * @note 字符串转blob类型
 *
 */
export function stringDataToBlob(data, type='text/html'){
    let blob =  new Blob([data],{
        type: type
    })
    return blob
}