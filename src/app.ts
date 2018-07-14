import { Request, Response } from 'express';
import {luisResult} from "./luisAPIHandler";
const express = require('express');
const app = express();

function movieHandler(req: Request, res: Response) {
    let question = req.query.question;
    res.send(`Hello, ${question}`);
}

// const apiHandler = new apiHandler();

// app.get('/movie', apiHandler.getMovie);

/**
 * "/movie?question=wherexx"
 * */

app.listen(3000, () => console.log('Example app listening on port 3000!'));

