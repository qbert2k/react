const {response} = require('express');
const {validationResult} = require('express-validator');

const createUser = (req, res = response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    const {name, email, password} = req.body;

    res.status(201).json({
        ok: true,
        msg: 'createUser',
        name,
        email,
        password
    });
};

const loginUser = (req, res = response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

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