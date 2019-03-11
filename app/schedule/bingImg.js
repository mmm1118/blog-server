/*
* 定时任务获取bing每日壁纸
* */

const schedule = require('node-schedule');
const request = require('request')


const scheduleCronstyle = async () => {
  //每分钟的第30秒定时执行一次:
  schedule.scheduleJob('3 * * * * *', () => {
    // console.log('scheduleCronstyle:' + new Date());
    request('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(JSON.parse(body).images) // Show the HTML for the baidu homepage.
      }
    })
  });
}
scheduleCronstyle()
// module.exports = scheduleCronstyle
