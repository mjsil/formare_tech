import produce from 'immer';

export default function post(state = [], action) {
    switch (action.type) {
        case '@post/SEND_MESSAGE_SUCCESS':
            return produce(state, draft => {
                const { message } = action;

                draft.push(message);
            });
        default:
            return state;
    }
}
