const {response} = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User')

const createUser = async (req, res = response) => {
    const {email, password} = req.body;

    try {
        let user = await User.findOne({email});

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'User already exists'
            });
        }

        user = new User(req.body);

        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Contact the administrator'
        });
    }
};

const loginUser = async (req, res = response) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});

        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'The user does not exist'
            });
        }

        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Incorrect Password'
            });
        }

        // TOdo JWT
        res.json({
            ok: true,
            uid: user.uid,
            email: user.email,
            name: user.name
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Contact the administrator'
        });
    }
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