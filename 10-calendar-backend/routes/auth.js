/**
 * Auth routes
 * host + /api/auth
 */
const {Router} = require('express');
const {check} = require('express-validator');
const {createUser, loginUser, renewToken} = require('../controllers/auth');
const router = Router();

router.post(
    '/new',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email is required').isEmail(),
        check('password', 'Password should have at least 6 characters').isLength({min: 6}),
    ], // middlewares
    createUser
);

router.post('/', loginUser);

router.get('/renew', renewToken);

module.exports = router;