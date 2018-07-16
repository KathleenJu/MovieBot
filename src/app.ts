import { Request, Response } from 'express';
import {luisResult} from "./luisAPIHandler";
const express = require('express');
const app = express();

async function movieHandler(req: Request, res: Response) {
    let question = req.query.question;
    let result = await luisResult(question);
    res.send(result);
}

app.get('/movie', movieHandler);

/**
 * "/movie?question=wherexx"
 * */

app.listen(3000, () => console.log('Example app listening on port 3000!'));

