const express = require('express');
const app = express();
const server = require('./server.js');
app.use('/api/', server);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on post ${port}....`));
