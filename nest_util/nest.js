const request = require('superagent');
const { PROD_ID, PROD_SECRET, PIN, ACCESS_TOKEN } = require('./nest.config');

const getBearerToken = () => {
  request
    .post('https://api.home.nest.com/oauth2/access_token')
    .query({
      client_id: PROD_ID,
      client_secret: PROD_SECRET,
      grant_type: 'authorization_code',
      code: PIN
    })
    .then(res => {
      const accessToken = `Bearer ${res.body.access_token}`;
      bearer(accessToken);
    })
    .catch(err =>
      console.error('Error in access token post:', err.response.res.req.socket._httpMessage.res.text
      ));
};
