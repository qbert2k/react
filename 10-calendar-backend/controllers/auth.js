const {response} = require('express');

const createUser = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'createUser'
    });
};

const loginUser = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'loginUser'
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