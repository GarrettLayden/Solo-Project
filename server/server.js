const express = require('express');
const app = express();
const path = require('path');
const port = 3000
const apiRouter = require('./router/apiRouter.js');

// parse incoming requests
app.use(express.json());

// api router
app.use('/api', apiRouter);

// GET request to receive the html file
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../index.html'));  
});

// 404 Error Handler for all other unknown end points
app.use('*', (req, res) => res.status(404).send('Get the fuck off this page'))

// Global Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: `Error caught in unknown middleware: ${err}]`,  
    status: 500,
    message: {err: 'An error has occurred'}
  };
  const errObj = Object.assign({}, defaultErr, errObj);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);  
})

// Listen on localhost:3000/
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});