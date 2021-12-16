import { Mail } from "./Mail";

export interface State{

    messages: Mail[],
    newMessage: Mail,
    removalIndex: number

};
