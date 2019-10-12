const cron = require('node-cron');
const express = require('express');

cron.schedule("* * * * *", () => {
  console.log(`this message logs every minute`);
});

app = express();
app.listen(8000);
