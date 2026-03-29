const events = [];

// CREATE EVENT
const createEvent = (event) => {
    events.push(event);
    return event;
};

// GET ALL EVENTS
const getAllEvents = () => {
    return events;
};

// GET EVENT BY ID
const getEventById = (id) => {
    console.log("Searching for event with ID:", id);
    return events.find(e => e.id === id);
};

// UPDATE EVENT
const updateEvent = (id, data) => {
    const event = getEventById(id);
    if (!event) return null;

    if (data.title !== undefined) event.title = data.title;
    if (data.description !== undefined) event.description = data.description;
    if (data.date !== undefined) event.date = data.date;
    if (data.time !== undefined) event.time = data.time;

    return event;
};

// DELETE EVENT
const deleteEvent = (id) => {
    const index = events.findIndex(e => e.id === id);
    if (index === -1) return null;

    return events.splice(index, 1)[0];
};

module.exports = {
    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent
};