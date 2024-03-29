import base from './index'
let axios = base.axios
let baseUrl = base.baseUrl
export const login = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/user/login`,
        data: params
    })
}
export const register = params => {
    return axios({
        method: 'put',
        baseURL: `${baseUrl}/api/user/register`,
        data: params
    })
}
export const logout = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/user/logout`,
        data: params
    })
}
export const queryAllUser = params => {
    return axios({
        method: 'get',
        baseURL: `${baseUrl}/api/manager/userPage`,
        params: params
    })
}
export const queryUserCount = params => {
    return axios({
        method: 'get',
        baseURL: `${baseUrl}/api/manager/queryTotalUserCount`,
        params: params
    })
}
export const deleteUser = params => {
    return axios({
        method: 'get',
        baseURL: `${baseUrl}/api/manager/deleteuser`,
        params: params
    })
}
export const deleteUserByuserName = params => {
    return axios({
        method: 'delete',
        baseURL: `${baseUrl}/api/manager/deleteUserByUserName`,
        params: params
    })
}
export const restoreUser = params => {
    return axios({
        method: 'Put',
        baseURL: `${baseUrl}/api/manager/restoreUser`,
        params: params
    })
}
export const thumbQuestionOrArticleOrComment = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/thumbAndFavour/thumbChange`,
        params: params
    })
}
export const favourQuestionOrArticleOrComment = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/thumbAndFavour/favourChange`,
        params: params
    })
}
export const addUserDayLife = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/profile/addUserDayLife`,
        params: params
    })
}
export const queryUserDayLife = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/profile/getUserDayLife`,
        params: params
    })
}
export const getUserInfo = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/profile/queryUserInfo`,
        params: params
    })
}
export const updateProfile = params => {
    return axios({
        method: 'put',
        baseURL: `${baseUrl}/api/profile/updateProfile`,
        data: params
    })
}
export const followFriend = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/profile/followFriend`,
        params: params
    })
}
export const getCommentList = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/comment/getCommentList`,
        params: params
    })
}
export const queryCommentImmediate = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/comment/queryCommentImmediate`,
        params: params
    })
}
export const addComment = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/comment/addComment`,
        data: params
    })
}
export const getSonComment = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/comment/getSonComment`,
        params: params
    })
}
export const queryTotalCount = params => {
    return axios({
        method: 'get',
        baseURL: `${baseUrl}/api/manager/queryTotalUserCount`,
        params: params
    })
}
