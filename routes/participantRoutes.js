const express = require('express');
const router = express.Router();

const participantController = require('../controllers/participantController');
const authMiddleware = require('../middlewares/authMiddleware');

// Register for event
router.post('/:id/register', authMiddleware, participantController.registerForEvent);

// Get my events
router.get('/my-events', authMiddleware, participantController.getMyEvents);

module.exports = router;