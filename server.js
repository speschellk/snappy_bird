const express = require('express');
const path = require('path');
const request = require('superagent');
const fs = require('fs');

const port = 3000;

const app = express();
app.use(express.static(path.join(__dirname), { etag: true }));
app.get('/snapshot', (req, res) => {
  console.log('server snapshot')
  request(
    'https://www.dropcam.com/api/wwn.get_snapshot/CjZsLU5sbzZHNWt0a1lxcTJxNHUyRTBwTDFEMGNIUVBER1JZa1pBR1dGSndnYTl5aFJaRnN0ZFESFmg1OVVYSGxSbVNLSy00Z2lwRHM2b2caNlJrSE1QeDlCa2FCVkQ3U08wUlNJNXlQdGFqaGQ0Zm8xWnR6NVNnS3U4Z3JCeFBzU3BCcFR0dw?auth=276TLaPo8WuHVOLRUugP_j7Vs_HL8xN70wm1AtKt2Q2WFfI0AzRYyZsYwsKYJu9ZzVLqzAw6HHV89FkVFnRAvqC5VqLGRpBw4H5o48BYxyAW2-jLP0z15_LrEacU-Pz4BOFH8pNjB0Gl99qnFVPnJtz0TCS_aIrkRULRfb8Ok42Blg-4-8hKX2f69--94z5B55i_PMVHkBCnS0'
  )
    .pipe(fs.createWriteStream('bird.png'))
    res.send('./bird.png')
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
