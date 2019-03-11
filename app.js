
const Koa = require('koa');
const config = require('./config');

// https://www.npmjs.com/package/koa2-cors
const cors = require('koa2-cors');

// https://www.npmjs.com/package/koa-bodyparser
const bodyParser = require('koa-bodyparser');

// https://github.com/Automattic/mongoose
const mongoose = require('mongoose');


const app = new Koa();

mongoose.connect(config.db, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.error('Failed to connect to database');
    } else {
        console.log('Connecting database successfully');
    }
});

app.use(cors());
app.use(bodyParser());
const example_router = require('./routes/api/example_router');

app.use(example_router.routes()).use(example_router.allowedMethods());

//定时器任务
const scheduleCronstyle = require('./app/schedule/bingImg')
// console.log(scheduleCronstyle)
// scheduleCronstyle();


app.listen(config.port);

