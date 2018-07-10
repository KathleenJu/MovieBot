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

