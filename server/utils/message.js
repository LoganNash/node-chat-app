var moment = require('moment');

var generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: moment().valueOf()
    };
};

var generateLocationMessage = (from, lat, lng) => {
    return {
        from,
        url: `https://wwww.google.com/maps?q=${lat},${lng}`,
        createdAt: moment().valueOf()
    }
}

var generateChatRoomName = (room) => {
    return {
        room
    }
}

module.exports = {generateMessage, generateLocationMessage, generateChatRoomName};