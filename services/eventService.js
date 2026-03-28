const { v4: uuidv4 } = require('uuid');
const eventRepo = require('../repositories/eventRepository');

// CREATE EVENT

const createEvent = (data, user) => {
    if (user.role !== "organizer") throw new Error("Only organizers can create events");

    const event = {
        title: data.title,
        description: data.description,
        date: data.date,
        time: data.time,
        createdBy: user.userId
    };

    return eventRepo.createEvent(event);
};

const getAllEvents = () => eventRepo.getAllEvents();
const getEventById = (id) => {
    const event = eventRepo.getEventById(id);
    if (!event) throw new Error("Event not found");
    return event;
};

const updateEvent = (id, data, user) => {
    const event = eventRepo.getEventById(id);
    if (!event) throw new Error("Event not found");
    if (event.createdBy !== user.userId) throw new Error("Unauthorized");
    return eventRepo.updateEvent(id, data);
};

const deleteEvent = (id, user) => {
    const event = eventRepo.getEventById(id);
    if (!event) throw new Error("Event not found");
    if (event.createdBy !== user.userId) throw new Error("Unauthorized");
    return eventRepo.deleteEvent(id);
};

module.exports = { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent };