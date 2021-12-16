import { State } from "./State";

export interface MailAction{
    type: string,
    payload: State
};