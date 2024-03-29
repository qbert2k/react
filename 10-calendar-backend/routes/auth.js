/**
 * Auth routes
 * host + /api/auth
 */
const {Router} = require('express');
const {check} = require('express-validator');
const {createUser, loginUser, renewToken} = require('../controllers/auth');
const {fieldValidator} = require('../middlewares/fieldValidator');
const {validateJwt} = require('../middlewares/validate-jwt');

const router = Router();

router.post(
    '/new',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email is required').isEmail(),
        check('password', 'Password should have at least 6 characters').isLength({min: 6}),
        fieldValidator
    ], // middlewares
    createUser
);

router.post('/', [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password should have at least 6 characters').isLength({min: 6}),
    fieldValidator
], loginUser);

router.get('/renew', validateJwt, renewToken);

module.exports = router;