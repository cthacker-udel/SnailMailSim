import { MailAction } from "../interfaces/MailAction";
import { State } from "../interfaces/State";
import produce from 'immer';

export const MailReducerFunction = (state: State, action: MailAction): State => {

    switch (action.type) {
        case "addMessage": {
            return produce(state, (draft) => {
                draft.messages = [...draft.messages, action.payload.newMessage];
            });
        }
        case "removeMessage": {

            return produce(state, (draft) => {

                draft.messages = draft.messages.filter((eachMessage, index) => index !== action.payload.removalIndex);
                
            })

        }
        default: {
            return { ...state };
        }

    }

}