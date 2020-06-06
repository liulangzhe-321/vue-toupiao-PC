// 基于axios 封装请求头
import axios from 'axios'
//创建一个axios 案例
//通过这个实例来发送请求 把需求的配置 配置给这个实例

const request =axios({
    baseURl:'http://ttapi.research.itcast.cn/'
})

//导出请求方法
export  default  request