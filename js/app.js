const express = require('express');
const axios = require('axios');
const app = express();
const webhookUrl = 'https://discord.com/api/webhooks/1208680212523524096/SGneR9LbA4CG2fipea8Yq_kydWV6GgP8di6E2bYOZI18oqHRcGvKfze10A7CC7L8ZL6X'; // Replace with your Discord webhook URL

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
