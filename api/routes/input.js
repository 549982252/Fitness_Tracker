const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) =>{
    const inputs = {
        yourName: req.body.yourName,
        totalTime: req.body.totalTime,
        totalDistance: req.body.totalDistance,
        averageHR: req.body.averageHR,
        weight: req.body.weight,
        age: req.body.age

    };
    res.status(201).json({
        message: 'Please enter your exercise data:',
        inputs: inputs
    });
});

router.get('/', (req, res, next) =>{
    res.status(201).json({
        message: 'Data displaying:'
    })
    res.send(inputs)
});

module.exports = router;