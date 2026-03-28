
const eventService = require('../services/eventService');

// CREATE EVENT
const createEvent = (req, res) => {
    try {
        const event = eventService.createEvent(req.body, req.user);
        res.status(201).json(event);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// GET ALL EVENTS
const getAllEvents = (req, res) => {
    res.json(eventService.getAllEvents());
};

// GET EVENT BY ID
const getEventById = (req, res) => {
    try {
        const event = eventService.getEventById(req.params.id);
        res.json(event);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

// UPDATE EVENT
const updateEvent = (req, res) => {
    try {
        const event = eventService.updateEvent(req.params.id, req.body, req.user);
        res.json(event);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE EVENT
const deleteEvent = (req, res) => {
    try {
        const event = eventService.deleteEvent(req.params.id, req.user);
        res.json(event);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// // REGISTER FOR EVENT
// const registerForEvent = (req, res) => {
//     try {
//         const event = eventService.registerForEvent(req.params.id, req.user);
//         res.json(event);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// };

module.exports = {
    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent,
    //registerForEvent
};