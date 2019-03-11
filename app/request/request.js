/*
* 请求接口
* */
const request = require('request')

// 获取bing每日一图
const requestBing = async () => {
  request('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(JSON.parse(body).images[0]) // Show the HTML for the baidu homepage.
    }
  })
}

// requestBing()
module.exports = {
  requestBing
}
