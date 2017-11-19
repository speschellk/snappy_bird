const request = require('superagent');
const { PROD_ID, PROD_SECRET, PIN } = require('./nest.config');

const nest = () => {
  request
    .post('https://api.home.nest.com/oauth2/access_token')
    .query({
      client_id: PROD_ID,
      client_secret: PROD_SECRET,
      grant_type: 'authorization_code',
      code: PIN
    })
    .then(function(res) {
      console.log('access_token', res.body.access_token);
      bearer(res.body.access_token);
    })
    .catch(function(err) {
      console.log(
        'Error in access token post:',
        err.response.res.req.socket._httpMessage.res.text
      );
    });
};

const bearer = token => {
  request
    .get('https://developer-api.nest.com')
    .accept('application/json')
    .set('Authorization', `Bearer ${token}`)
    .query()
    .end((err, res) => {
      if (err) {
        console.log('Error in GET', err);
      } else {
        console.log('Response:', res);
      }
    });
};

// TODO: call from App in componentDidMount
nest();
