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

export const getTemQuestion = params => {
    return axios({
        method: 'get',
        baseURL: `${baseUrl}/api/problem/getQuestionTem`,
        params: params
    })
}
export const getLastEdit = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/problem/getLastEdit`,
        params: params
    })
}
export const getQuestionPending = params => {
    return axios({
        method: 'get',
        baseURL: `${baseUrl}/api/managerProblem/showQuestion`,
        params: params
    })
}
export const getQuestionCount = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/managerProblem/getQuestionNumber`,
        data: params
    })
}
export const deleteQuestionByNumber = params => {
    return axios({
        method: 'delete',
        baseURL: `${baseUrl}/api/managerProblem/deleteQuestionByNumber`,
        params: params
    })
}
export const deleteQuestionByTitleName = params => {
    return axios({
        method: 'delete',
        baseURL: `${baseUrl}/api/managerProblem/deleteQuestionByTitle`,
        params: params
    })
}
export const passQuestion = params => {
    return axios({
        method: 'put',
        baseURL: `${baseUrl}/api/managerProblem/passQuestion`,
        params: params
    })
}
export const issueQuestion = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/problem/issueQuestion`,
        params: params
    })
}
export const getLanguageList = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/problem/getLanguageList`,
        params: params
    })
}
export const getQuestionList = params => {
    return axios({
        method: 'get',
        baseURL: `${baseUrl}/api/problem/showQuestion`,
        params: params
    })
}
export const getQuestionContentByTn = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/problem/getQuestionContentByTitleName`,
        params: params
    })
}

export const getQuestionContent = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/problem/getQuestionContent`,
        params: params
    })
}
export const submitQuestion = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/problem/submitCode`,
        data: params
    })
}
export const getSubmitRecord = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/problem/getSubmitRecord`,
        params: params
    })
}
export const getLatestSubmitMsg = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/problem/getLatestSubmitMsg`,
        params: params
    })
}
export const getPersonSubmitNumMsg = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/getQuestion/getSolveMessage`,
        params: params
    })
}
export const getPersonSolvePbMsg = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/getQuestion/getPassMessage`,
        params: params
    })
}
// 
export const getAllSubmitNumMsg = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/getQuestion/getSolveTotalMessage`,
        params: params
    })
}
export const getAllProblemMsg = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/problem/getQuestionNum`,
        params: params
    })
}