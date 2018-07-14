const express = require('express');
const app = express();

function movieHandler(request, response) {
    let question = request.query.question;
    response.send(`Hello, ${question}`);
}
app.get('/movie', movieHandler);

/**
 * "/movie?question=wherexx"
 * */

app.listen(3000, () => console.log('Example app listening on port 3000!'));

