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