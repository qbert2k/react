/**
 * Event routes
 * host + /api/events
 */
const {Router} = require('express');
const {validateJwt} = require('../middlewares/validate-jwt')
const {getEvents, createEvent, updateEvent, deleteEvent} = require('../controllers/events');

const router = Router();

router.get('/', validateJwt, getEvents);

router.post('/', validateJwt, createEvent);

router.put('/:id', validateJwt, updateEvent);

router.delete('/:id', validateJwt, deleteEvent);

module.exports = router;