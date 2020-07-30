const express = require('express');
const app = express();
const apiRouter = require('./api-router.js');
app.use('/api', apiRouter);
app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();

});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on post ${port}....`));
