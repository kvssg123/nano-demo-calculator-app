const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello');
});

baseRouter.post('/add', (req, res) => {
    const num1 = req.body.first;
    const num2 = req.body.second;
    const sum = num1 + num2;
    res.json({ "result": sum });
});


baseRouter.post('/subtract', (req, res) => {
    const num1 = req.body.first;
    const num2 = req.body.second;
    const diff = num1 - num2;
    res.json({ "result": diff });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});