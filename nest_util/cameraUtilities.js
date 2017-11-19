const request = require('superagent');
const { PROD_ID, PROD_SECRET, PIN, ACCESS_TOKEN } = require('./nest.config');

const getCameraInfo = (token, callback) => {
  request
    .get('https://developer-api.nest.com')
    .accept('application/json')
    .set('Authorization', token)
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

const viewPublicURL = callback => {
  request
    .get(public_share_url)
    .then(res => callback(res))
    .catch(err => console.log(err));
};

const takeSnapshot = () => {
  request
    .get(snapshot_url)
    .then(res => callback(res))
    .catch(err => console.log(err));
};

getCameraInfo(ACCESS_TOKEN, info => {
  console.log('info is:', info);
});
