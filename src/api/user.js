import base from './index'
let axios = base.axios
let baseUrl = base.baseUrl
export const login = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/user/login`,
        data: params
    }).then(res => res.data)
}
export const register = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/user/register`,
        data: params
    }).then(res => res.data)
}