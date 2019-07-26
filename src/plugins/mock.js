const Mock = require('mockjs')

const domain = 'http://mockjs.com/api'
import Api from '@/api/index.js'


const apiList = [
    ...Api
]

apiList.forEach(item => {
    Mock.mock(`${domain}/${item.apiName}`, item.type, item.data);   
})