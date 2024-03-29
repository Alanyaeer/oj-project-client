import base from './index'
let axios = base.axios
let baseUrl = base.baseUrl
// getQuestionSolveArticleList

export const getQuestionSolveArticleList = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/article/getQuestionSolveArticleList`,
        params: params
    })
}
export const getArticleContent = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/article/getArticleContent`,
        params: params
    })
}
export const addArticleFn = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/article/addArticle`,
        data: params
    })
}