const { v4: uuidv4 } = require('uuid');
const events = [];

const createEvent = (event) => {
    event.id = uuidv4();
    event.createdAt = new Date();
    event.participants = [];
    events.push(event);
    return event;
};

const getAllEvents = () => events;
const getEventById = (id) => events.find(e => e.id === id);
const updateEvent = (id, data) => {
    const event = getEventById(id);
    if (!event) return null;
    if (data.title !== undefined) event.title = data.title;
    if (data.description !== undefined) event.description = data.description;
    if (data.date !== undefined) event.date = data.date;
    if (data.time !== undefined) event.time = data.time;
    return event;
};
const deleteEvent = (id) => {
    const index = events.findIndex(e => e.id === id);
    if (index !== -1) return events.splice(index, 1)[0];
    return null;
};

module.exports = { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent };