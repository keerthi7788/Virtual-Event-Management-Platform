const participantService = require('../services/participantService');

// REGISTER
const register = async (req, res) => {
    try {
        const data = await participantService.registerForEvent(req.params.id, req.user);
        res.status(201).json({ message: "Registered successfully", data });
    } catch (err) { res.status(400).json({ error: err.message }); }
};

const getMyEvents = (req, res) => {
    try { res.json(participantService.getMyEvents(req.user)); }
    catch (err) { res.status(400).json({ error: err.message }); }
};

module.exports = { register, getMyEvents };