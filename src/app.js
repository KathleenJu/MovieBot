const express = require('express');
const app = express();

function movieHandler(req, res) {
    let question = req.query.question;
    res.send(`Hello, ${question}`);
}

app.get('/movie', movieHandler);

/**
 * "/movie?question=wherexx"
 * */

app.listen(3000, () => console.log('Example app listening on port 3000!'));

[{
    "endIndex": 37,
    "entity": "queen st",
    "resolution": {"values": ["queen street"]},
    "role": "",
    "startIndex": 30,
    "type": "Location"
}, {
    "endIndex": 50,
    "entity": "st lukes",
    "resolution": {"values": ["st lukes"]},
    "role": "",
    "startIndex": 43,
    "type": "Location"
}]

[{
    "endIndex": 37,
    "entity": "queen st",
    "resolution": {"values": ["queen street"]},
    "role": "",
    "startIndex": 30,
    "type": "Location"
}, {
    "endIndex": 50,
    "entity": "st lukes",
    "resolution": {"values": ["st lukes"]},
    "role": "",
    "startIndex": 43,
    "type": "Location"
}]
