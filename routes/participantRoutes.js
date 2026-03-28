const router = require('express').Router();
const participantController = require('../controllers/participantController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/:eventId/register', authMiddleware, participantController.register);
router.get('/me', authMiddleware, participantController.getMyEvents);

module.exports = router;

