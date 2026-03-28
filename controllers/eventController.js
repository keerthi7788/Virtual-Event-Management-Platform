
// CREATE EVENT
const eventService = require('../services/eventService');

const createEvent = (req, res) => {
    try { res.status(201).json(eventService.createEvent(req.body, req.user)); }
    catch (err) { res.status(400).json({ error: err.message }); }
};
const getAllEvents = (req, res) => res.json(eventService.getAllEvents());
const getEventById = (req, res) => {
    try { res.json(eventService.getEventById(req.params.id)); }
    catch (err) { res.status(404).json({ error: err.message }); }
};
const updateEvent = (req, res) => {
    try { res.json(eventService.updateEvent(req.params.id, req.body, req.user)); }
    catch (err) { res.status(400).json({ error: err.message }); }
};
const deleteEvent = (req, res) => {
    try { res.json(eventService.deleteEvent(req.params.id, req.user)); }
    catch (err) { res.status(400).json({ error: err.message }); }
};

module.exports = { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent };