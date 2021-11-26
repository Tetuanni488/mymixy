const express = require('express');
const config = require('./server/config');
const app = config(express());

//DB
require('./datebase')

//Starting ServerØÿ

app.listen(app.get('port'), ()=>{
    console.log('Server on port',app.get('port'));
})
