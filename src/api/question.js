import base from './index'
let axios = base.axios
let baseUrl = base.baseUrl
/**
 * 
 * @param {这是用于创作者创作过程中的图片上传} params 
 * @returns 
 */
export const uploadPictureAndFile = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/questionAndPictrueCommon/upload`,
        data: params
    })
}
/**
 * 
 */
export const downloadPictureURl = params => {
    return axios({
        method: 'get',
        baseURL: `${baseUrl}/api/questionAndPictrueCommon/download`,
        params: params
    })
}
export const uploadQuestion = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/problem/upload`,
        data: params
    })
}
export const submitUploadProblem = params => {
    return axios({
        method: 'put',
        baseURL: `${baseUrl}/api/problem/submitUpload`,
        data: params
    })
}
export const getTagList = params => {
    return axios({
        method: 'get',
        baseURL: `${baseUrl}/api/problem/getTagList`,
        params: params
    })
}