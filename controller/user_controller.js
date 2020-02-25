const express = require('express');
const User = require('../models/User');


createUser = async () => {
    const { name, email, password } = req.body;

    const data = await User.create({
        name,
        email,
        password,
    });

    if(!data){
        res.status(400).json({
            success: false,
            message: "user not created"
        });
    }
    res.json({
        success: true,
        message: "user created",
        data: data
    });
}

getAllUser = async () => {
    const{ skip,  limit} = req.query

    try{
        const data = await User.find()
        if (!data) {
            res.status(404).json({ success: false, message: 'Not found'});
            return;
        } else {
            res.status(200).json({ success: true, data })
        }
    } catch (error) {
        console.error(error);
        res.status(400).json(error);
    };
}

getUserById = async () => {

}

module.exports = { createUser }