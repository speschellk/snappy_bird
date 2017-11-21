const express = require('express');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const axios = require('axios');

const port = 3000;

const app = express();
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
