import express from 'express';
const app = express();
app.get('/ads', (request, response) => {
    return response.json('deu bom');
});
app.listen(3333);
