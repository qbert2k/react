const {response} = require('express');

const createUser = (req, res = response) => {
    const {name, email, password} = req.body;

    if (name.length < 5) {
        return res.json({
            ok: true,
            msg: 'name should be at least 5 characters',
        });
    }

    res.json({
        ok: true,
        msg: 'createUser',
        name,
        email,
        password
    });
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