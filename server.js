const express = require('express');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const config = require('./webpack.config');
const axios = require('axios');

const port = 8080;

const app = express();
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  console.log('here in dev')
  const compiler = webpack(config);
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath
    })
  );
  app.use(webpackHotMiddleware(compiler));
}
app.use(express.static(path.join(__dirname), { etag: true }));

app.get('/snapshot', (req, res) => {
  let fileName = `bird${Date.now()}.jpeg`;
  axios({
    method: 'get',
    url: `https://www.dropcam.com/api/wwn.get_snapshot/${process.env
      .SNAP_ID}?auth=${process.env.SNAP_AUTH}`,
    responseType: 'stream'
  })
    .then(response => {
      response.data.pipe(fs.createWriteStream(fileName));
      response.data.on('end', () => {
        res.send(fileName);
      });
    })
    .catch(err => {
      console.log('Error getting snapshot:', err);
    });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
