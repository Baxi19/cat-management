const express = require('express');
const catsRouter = require('./cats.router');

const routerApi = (app) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use('/cats', catsRouter);
}
module.exports = routerApi;
