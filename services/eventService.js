const { v4: uuidv4 } = require('uuid');
const eventRepo = require('../repositories/eventRepository');

// CREATE EVENT
const createEvent = (data, user) => {
    if (!user || user.role !== "organizer") {
        throw new Error("Only organizers can create events");
    }

    if (!data.title || !data.date || !data.time) {
        throw new Error("Title, date and time are required");
    }

    const event = {
        id: uuidv4(),
        title: data.title,
        description: data.description || "",
        date: data.date,
        time: data.time,
        createdBy: user.userId,
        participants: [],
        createdAt: new Date()
    };

    return eventRepo.createEvent(event);
};

// GET ALL EVENTS
const getAllEvents = () => {
    return eventRepo.getAllEvents();
};

// GET EVENT BY ID
const getEventById = (id) => {
    const event = eventRepo.getEventById(id);
    if (!event) throw new Error("Event not found");
    return event;
};

// UPDATE EVENT
const updateEvent = (id, data, user) => {
    const event = eventRepo.getEventById(id);
    if (!event) throw new Error("Event not found");

    if (event.createdBy !== user.userId) {
        throw new Error("Unauthorized");
    }

    return eventRepo.updateEvent(id, data);
};

// DELETE EVENT
const deleteEvent = (id, user) => {
    const event = eventRepo.getEventById(id);
    if (!event) throw new Error("Event not found");

    if (event.createdBy !== user.userId) {
        throw new Error("Unauthorized");
    }

    return eventRepo.deleteEvent(id);
};

// REGISTER FOR EVENT
const registerForEvent = (eventId, user) => {
    const event = eventRepo.getEventById(eventId);
    if (!event) throw new Error("Event not found");

    if (event.participants.includes(user.userId)) {
        throw new Error("User already registered");
    }

    event.participants.push(user.userId);
    return event;
};

module.exports = {
    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent,
    registerForEvent
};