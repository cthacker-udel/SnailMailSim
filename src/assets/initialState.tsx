import { State } from "../interfaces/State";

export const initialState: State = {
    messages: [],
    newMessage: {
        sender: '',
        message: '',
        time: new Date()
    },
    removalIndex: 0
};
