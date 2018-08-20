import axios from 'axios'
import { message } from 'antd'
const JsonP = require('jsonp') //  TSLint: require statement not part of an import statement (no-var-requires) 

interface IOptions {
    url: string
    method?: string
    baseURL?: string
    timeout?: number
    params?: any
    data?: any
}
interface IWeatherAPIRes {
    status: string
    message: string
}
export default class Axios {
    // static,静态属性在类本身，而不是在实例上
    public jsonp(options: IOptions) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                params: 'callback' // 跨域，callback接收
            }, (err: any, response: IWeatherAPIRes) => {
                if (err) {
                    reject(err)
                    return
                }
                if (response.status === 'success') {
                    resolve(response)
                } else {
                    reject(response.message)
                }
            })
        })
    }

    // 静态属性是存在于类本身上的属性，
    public ajax(options: IOptions) {
        // let loading: any
        // if (options.data && options.data.isShowLoading !== false) {
        //     loading = document.getElementById('ajaxLoading');
        //     loading.style.display = 'block'
        // }
        const baseApi: string = 'http://localhost:8000' // admin_server项目的服务
        return new Promise((resolve, reject) => {
            axios({
                    url: options.url,
                    method: options.method,
                    baseURL: baseApi,
                    timeout: 5000,
                    params: (options.data && options.data.params) || ''
                }).then((response:any) => {
                    // if (options.data && options.data.isShowLoading !== false) {
                    //     loading = document.getElementById('ajaxLoading');
                    //     loading.style.display = 'none';
                    // }
                    if (response.status === 200) {
                        const res = response.data
                        if (res.code === '0') {
                            resolve(res)
                            message.success(res.msg)
                        } else {
                            message.error(res.msg)
                            reject(res.msg)
                        }
                    } else {
                        reject(response.status)
                    }
                })
            })
    }
} 