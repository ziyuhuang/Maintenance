const express = require('express');
const app = express();
app.listen(5000, () => {
    console.log('listen on port 5000');
});

app.get('/app', async(req, res) => {
    res.status(200).send({'OK': 'Let it storms'});
});