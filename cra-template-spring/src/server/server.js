const express = require('express');
const app = express();

app.get('/api/xuqw', (req, res) => {
    res.header('Access-Control-Allow-Origin', '\*');
    res.send({
        name: 'xbeichen',
        comurl: 'geov.online'
    });
});

app.listen(3000, () => {
    console.log('app listen 3000 port');
});