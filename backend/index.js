const express = require('express');
const app = express();
const apiRouter = require('./api-router.js');
app.use('/api', apiRouter);
app.use(function(req, res, next) {
  next();
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on post ${port}....`));
