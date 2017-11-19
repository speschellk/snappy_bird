const request = require('superagent');
const { PROD_ID, PROD_SECRET, PIN, ACCESS_TOKEN } = require('./nest.config');

const getCameraInfo = (token, callback) => {
  request
    .get('https://developer-api.nest.com')
    .accept('application/json')
    .set('Authorization', token)
    .query()
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

const viewWeb = callback => {
  request.get(web_url);
};

const viewPublicURL = callback => {
  request.get(public_share_url);
};

const takeSnapshot = () => {
  request.get(snapshot_url);
};

getCameraInfo(ACCESS_TOKEN, info => {
  console.log('info is:', info);
});
