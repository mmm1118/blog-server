
const Example_col = require('./../models/example');


const getExample = async (ctx, next) => {
  const req = ctx.request.query;
  console.log(req.name)

  const examples = await Example_col.find({}, { _id: false });

  ctx.status = 200;
  ctx.body = {
    msg: '10000',
    data: {
      data: req,
      examples,
    }
  }
}

const getDemo = async (ctx, next) => {
  const req = ctx.request.query
  const examples = await Example_col.find({ msg: /req/ });
  ctx.status = 200;
  ctx.body = {
    msg: '1',
    data: {
      data: 'sussess',
      examples
    }
  }
}

const postExample = async (ctx, next) => {
  const req = ctx.request.body;
  console.log(req)
  ctx.status = 200;
  if (!req.msg || typeof req.msg != 'string') {
    ctx.status = 401;
    ctx.body = {
      msg: 'post request!!',
      desc: `parameter error！！msg: ${req.msg}`,
      data: req
    }
    return;
  }

  const result = await Example_col.create({ msg: req.msg });

  ctx.body = {
    msg: 'post request!!',
    desc: 'insert success!',
    data: result
  }
}

module.exports = {
  getExample,
  getDemo,
  postExample,
}
