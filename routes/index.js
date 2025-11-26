const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send(JSON.stringify(latestRequest));
});

router.post('/', function(req, res, next) {

    let headers = req.headers;
    let body = req.body;
    let data = [headers, body];
    latestRequest = data;

    let dataStr = JSON.stringify(data);
    console.log(dataStr);

    res.send('respond with a resource');
});

module.exports = router;
