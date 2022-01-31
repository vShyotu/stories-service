const Koa = require("koa");
const KoaBody = require("koa-body");
const stories = require("./stories");

const app = new Koa();

const koaBody = new KoaBody();

app.use(koaBody);
app.use(stories.routes());

module.exports = app;
