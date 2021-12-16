import React from "react";
import { MailAction } from "../interfaces/MailAction";
import { State } from "../interfaces/State";


export const MailReducerFunction = (state: State, action: MailAction): State => {

    switch (action.type) {

        default: {
            return { ...state };
        }

    }

}