const axios = require('axios');

const getBearerToken = () => {
  axios
    .post('https://api.home.nest.com/oauth2/access_token')
    .query({
      client_id: process.env.PROD_ID,
      client_secret: process.env.PROD_SECRET,
      grant_type: 'authorization_code',
      code: process.env.PIN
    })
    .then(res => {
      ACCESS_TOKEN=`Bearer ${res.body.access_token}`;
    })
    .catch(err =>
      console.error('Error in access token post:', err.response.res.req.socket._httpMessage.res.text
      ));
};
