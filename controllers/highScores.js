const express = require('express');
const router = express.Router();
const HighScore = require('../models/HighScore');

router.get('/', (req, res)=>{
    console.log('getting all high scores...')
});

router.post('/', async (req,res) => {
    try {
        const {name, category, difficulty, score} = req.body;
        const data = await HighScore.create(name, category, difficulty, score);
        console.log(data);
        res.status(201).json(data);
    } catch (error) {
       console.log(error); 
       res.status(400)
    }
});

module.exports =  router ;