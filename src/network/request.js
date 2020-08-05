import axios from 'axios'

export function request(config){
    // 创建axios实例
    const incetanc = axios.create({
        baseURL:'http://123.123.0.21:8000',
        timeout: 5000
    })

    // 拦截器
    incetanc.interceptors.request.use(config => {
        // 请求拦截器的作用
            // 1.config中的信息不符合服务器的要求
            // 2.在每次请求时显示loading
            // 3.请求时，必须携带一些特殊的信息
        return config
    }), err => {

    }

    // 响应拦截
    incetanc.interceptors.request.use(res =>{
        return res.data
    }), err => {

    }

    // 发送网络请求
    // 应是返回一个promise
    return incetanc(config)

}