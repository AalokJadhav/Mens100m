const express = require('express');
require('../db/conn');
const MensRanking = require('../models/mens')


const app = express();

const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    res.send('Hello From The Home Side..!')
})


// Handle POST Request
app.post('/mens', async(req, res) =>  {
    try {
        
    } catch (error) {
        
    }
})
app.listen(port,( ) => {
    console.log(`Connection is live at Port No ${port}`);
})