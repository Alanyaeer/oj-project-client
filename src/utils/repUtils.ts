/**
 * 
 * @param {code表示状态码 msg表示返回的消息 data表示返回的信息}rep 
 * @note {用户校验是否返回成功}
 * @returns 
 */
export const validateRep = (rep: {code: Number, msg: String, data: Object})=>{
    if(rep.code === 200) return true
    else return false
}
/**
 * 
 * @param rep 
 * @note {返回响应信息}
 * @returns 
 *
 */
export const getRep = (rep: {code: Number, msg: String, data: Object})=>{
    return rep.data
}
/**
 * 
 * @param {获取用户的信息}obj 
 * @returns 
 */
export const constructParams = (...obj)=>{
    return {
        obj
    }
}