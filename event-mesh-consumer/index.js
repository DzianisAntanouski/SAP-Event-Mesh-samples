const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.options('*', (req, res) => {
    console.log("options", req.path)
    // res.writeHead(200, { 'WebHook-Allowed-Origin': '*' }).send()
    res.status(200).end();
})
app.post('*', (req, res) => {
    console.log('Data:', req.body, req.path);
    if(req.path === "/") {
        res.sendStatus(300);
    } else {
        res.sendStatus(200);
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
