const express = require('express');
const router = express.Router();

let latestRequest = null;

router.get('/', function(req, res, next) {
    res.send(JSON.stringify(latestRequest));
});

router.post('/', function(req, res, next) {

    let timestamp = new Date().toISOString();

    let headers = req.headers;
    let body = req.body;
    let data = [timestamp, headers, body];

    latestRequest = data;

    let dataStr = JSON.stringify(data);
    console.log(dataStr);

    res.send('received post request');
});

router.put('/', function(req, res, next) {

    let timestamp = new Date().toISOString();

    let headers = req.headers;
    let body = req.body;
    let data = [timestamp, headers, body];

    latestRequest = data;

    let dataStr = JSON.stringify(data);
    console.log(dataStr);

    res.send('received put request');
});

module.exports = router;
