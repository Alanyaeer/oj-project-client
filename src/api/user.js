import base from './index'
let axios = base.axios
let baseUrl = base.baseUrl
export const login = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/login`,
        data: params
    }).then(res => res.data)
}
export const register = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/api/register`,
        data: params
    }).then(res => res.data)
}