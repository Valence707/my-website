const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require('fs');
const path = require("path");
require("dotenv").config();
const https = require('https');
const helmet = require("helmet");

/* --- PRODUCTION SERVER --- */
// const httpsPort = 443;
// const httpsOptions = {
//     key: fs.readFileSync("/etc/letsencrypt/live/whatthe.twilightparadox.com/privkey.pem"),
//     cert: fs.readFileSync("/etc/letsencrypt/live/whatthe.twilightparadox.com/fullchain.pem")
// }
//
// httpsServer = https.createServer(httpsOptions, app).listen(httpsPort, () => {
//     console.log("SERVER LISTENING ON PORT "+httpsPort);
// });
/* --- PRODUCTION SERVER --- */

/* --- DEVELOPMENT SERVER --- */
app.listen(80, ()=>{
    console.log(`DEVELOPMENT SERVER ON PORT 80`);
});
/* --- DEVELOPMENT SERVER --- */

app.use(bodyParser.urlencoded({extended: false}), express.static(__dirname));

app.get('/test', (req, res) => {
    console.log("RECEIVED");
    res.json({"CONFIRMATION": "RECEIVED"})
});