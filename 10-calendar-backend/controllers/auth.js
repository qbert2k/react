const {response} = require('express');
const User = require('../models/User')

const createUser = async (req, res = response) => {
    // const {name, email, password} = req.body;

    try {
        const user = new User(req.body);
        await user.save();

        res.status(201).json({
            ok: true,
            msg: 'createUser'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Contact the administrator'
        });
    }

};

const loginUser = (req, res = response) => {
    const {email, password} = req.body;

    res.json({
        ok: true,
        msg: 'loginUser',
        email,
        password
    });
};

const renewToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'renewToken'
    });
};

module.exports = {
    createUser,
    loginUser,
    renewToken,
};