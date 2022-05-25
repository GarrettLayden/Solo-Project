const fetch = require('node-fetch')

const apiController = {};

apiController.getData = (req, res, next) => {
  fetch('https://api.deezer.com/version/service/id/method/?parameters')
    .then(response => response.json())
    .then(data => {
      res.locals.data = data;
      return next();
    })
    .catch(err => {
      return next({
        log: `Error caught in apiController.getData: ${err}`,  
        status: 400,
        message: {err: 'check the log'}
      })
    })
}

module.exports = apiController;