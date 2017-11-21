const request = require('axios');

const getCameraInfo = callback => {
  request
    .get('https://developer-api.nest.com')
    .set('Authorization', process.env.ACCESS_TOKEN)
    .end((err, { body: { devices: { cameras } } }) => {
      if (err) {
        console.error('Error in GET', err);
      } else {
        const cameraId = Object.keys(cameras)[0];
        const cameraInfo = cameras[cameraId];
        callback(cameraInfo);
      }
    });
};

module.exports = { getCameraInfo };
