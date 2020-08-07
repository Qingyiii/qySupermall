import {request} from './request'
//创建一个中间模块，将一个页面中的所有网络请求封装
export function getHomeMultiData(){
    return request({
        url:'./home/multidata'
    })
}