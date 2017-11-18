const request = require('superagent');

const nest = () => {
  request.post('https://api.home.nest.com/oauth2/access_token')
    .query({
      client_id: '0c3af9dd-40fd-468d-9bb5-fb47007b1f69',
      client_secret: 'N38M9DYYFRXn58sbrEaEBlahN',
      grant_type: 'authorization_code',
      code: '9XNUS4H6'
    })
    .then(function(res) {
      console.log('access_token', res.body.access_token);
      bearer(res.body.access_token);
    })
    .catch(function(err) {
      console.error(err);
    });
};

const bearer = (token) => {
  request.get('https://developer-api.nest.com')
    .accept('application/json')
    .set('Authorization', `Bearer ${token}`)
    .query()
    .end((err, res) => {
      if (err) {
        console.log('Error in GET', err);
      } else {
        console.log('res is', res);
      }
    });
};

nest();
