/**
 * Event routes
 * host + /api/events
 */
const {Router} = require('express');
const {check} = require('express-validator');

const {isDate} = require('../helpers/isDate');
const {validateJwt} = require('../middlewares/validate-jwt')
const {fieldValidator} = require('../middlewares/fieldValidator')
const {getEvents, createEvent, updateEvent, deleteEvent} = require('../controllers/events');

const router = Router();
router.use(validateJwt);

router.get('/', getEvents);

router.post(
    '/',
    [
        check('title', 'The title is mandatory').not().isEmpty(),
        check('start', 'Start date is mandatory').custom(isDate),
        check('end', 'End date is mandatory').custom(isDate),
        fieldValidator
    ],
    createEvent
);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;