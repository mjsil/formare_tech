export function sendMessageRequest(id_friend, message, date, hours) {
    return {
        type: '@post/SEND_MESSAGE_REQUEST',
        id_friend,
        message,
        date,
        hours
    }
}

export function sendMessageSuccess(message) {
    return {
        type: '@post/SEND_MESSAGE_SUCCESS',
        message
    }
}
