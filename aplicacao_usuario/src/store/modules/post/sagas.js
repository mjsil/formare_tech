import { put, all, takeLatest } from 'redux-saga/effects';

import { sendMessageSuccess } from './actions';

function* sendMessage({ id_friend, message, date, hours }) {
    if (message === '') {
        return;
    }
    
    const data = {
        id_friend,
        message,
        date,
        hours
    }

    yield put(sendMessageSuccess(data));
}


export default all([
    takeLatest('@post/SEND_MESSAGE_REQUEST', sendMessage)
]);
