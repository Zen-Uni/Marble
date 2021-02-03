import axios from 'axios'

export function useGet() {
    return async function(url) {
        return new Promise((resolve, reject) => {
            axios.get(url)
            .then(res => {
                resolve(res)
            })
        })
    }
}

export function usePost() {
    return async function(url, data) {
        return new Promise((resolve, reject) => {
            axios.post(url, data)
            .then(res => {
                resolve(res)
            })
        })
    }
}

export function setReqToken() {
    axios.interceptors.request.use(config => {
        const token = window.localStorage.getItem('marble-config')
        if (token) {
            config.headers.Authorization = token
            console.log('set token sccess', token)
            return config
        }
    })
}