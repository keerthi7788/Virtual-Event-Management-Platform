const { v4: uuidv4 } = require('uuid');
const participantRepo = require('../repositories/participantRepo');
const eventRepo = require('../repositories/eventRepository');

// MOCK EMAIL
const sendEmail = async (email, event) => {
    return new Promise(resolve => {
        console.log(`Email sent to ${email} for event: ${event.title}`);
        resolve();
    });
};
// REGISTER FOR EVENT

const registerForEvent = async (eventId, user) => {
    const event = eventRepo.getEventById(eventId);
    console.log("Event found:", event);
    if (!event) throw new Error("Event not found");

    const existing = participantRepo.findByUserAndEvent(user.userId, eventId);
    if (existing) throw new Error("Already registered");

    const participant = { id: uuidv4(), userId: user.userId, eventId, createdAt: new Date() };
    event.participants.push(user.userId);  // store in event
    participantRepo.addParticipant(participant);

    await sendEmail(user.email, event);    // send email

    return participant;
};

const getMyEvents = (user) => {
    const registrations = participantRepo.getByUserId(user.userId);
    return registrations.map(r => eventRepo.getEventById(r.eventId));
};

module.exports = { registerForEvent, getMyEvents };