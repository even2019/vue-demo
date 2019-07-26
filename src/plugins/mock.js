const Mock = require('mockjs')

const domain = 'http://mockjs.com/api'
// import Api from '@/api/index.js'


// const apiList = [
//     ...Api
// ]

const testApi = {
    "totalMoney": 59,
    "list": [
        {
            name: 'jack'
        },
        {
            name: 'mary'
        }
    ]
}

// apiList.forEach(item => {
//     Mock.mock(`${domain}/${item.apiName}`, item.type, item.data);
// })
    Mock.mock(`${domain}/login`, 'post', testApi);