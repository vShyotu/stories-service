const Router = require("koa-router");

const router = new Router({
  prefix: "/stories",
});

const stories = [
  {
    id: 1,
    name: "Story 1",
    author: "Grant",
  },
  {
    id: 2,
    name: "Story 2",
    author: "Grant",
  },
];

router.get("/", (ctx, next) => {
  ctx.body = stories;
  next();
});

module.exports = router;
