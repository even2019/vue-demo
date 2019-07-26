const Mock = require('mockjs')

const domain = 'http://mockjs.com/api' 


const testData={
    "totalMoney":59,
    "list":[
        {
           name:'jack' 
        },
        {
            name:'mary' 
        }
    ]

}
Mock.mock(`${domain}/posts`, 'post', testData);   