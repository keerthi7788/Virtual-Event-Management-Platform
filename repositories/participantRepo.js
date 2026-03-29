const participants = [];

// ADD PARTICIPANT
const addParticipant = (participant) => {
    participants.push(participant);
    return participant;
};

// CHECK IF USER ALREADY REGISTERED FOR EVENT
const findByUserAndEvent = (userId, eventId) => {
    return participants.find(
        p => p.userId === userId && p.eventId === eventId
    );
};

// GET ALL EVENTS FOR A USER
const getByUserId = (userId) => {
    return participants.filter(p => p.userId === userId);
};

module.exports = {
    addParticipant,
    findByUserAndEvent,
    getByUserId
};