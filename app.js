const express = require('express');
const app = express();

app.use('/details', (req, res, next) => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    
    res.locals.time = time;
    next();
});

app.use('/details', (req, res) => {
    const time = res.locals.time;
    res.send(
        '<div style="text-align: center;">' +
            '<p>' +
                '<b>' + 'Current Time:' + '</b>' +
                '<br/>' + time +
            '</p>' +
        '</div>'
    );
});

app.use('/', (req, res) => {
    res.send(
        '<div>' +
            '<a href="/home">Home</a><br/>' + 
            '<a href="/details">Details</a><br/>' +
        '</div>'
    );
});

app.listen(3000);