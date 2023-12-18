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
