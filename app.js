/**
 * Created by jorky on 2017/12/7.
 */
const Koa = require('koa')
const controller = require('./controllers')
const bodyParser = require('koa-bodyparser')
const rest = require('./utils/rest')
const app = new Koa()
// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
    await next()
})
// bind .rest() for ctx:
app.use(rest.restify())
//
app.use(bodyParser())
app.use(controller())
app.listen(3000)
console.log('app start at http://localhost:3000')
