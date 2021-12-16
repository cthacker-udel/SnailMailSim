import { DispatchContext } from "./DispatchContext";
import React from "react";
import { MailAction } from "../interfaces/MailAction";

export const UseDispatchContext = (): {dispatch: React.Dispatch<MailAction>} => {

    const dispatch = React.useContext(DispatchContext);
    if (dispatch === undefined) {
        throw new Error("Unable to get Dispatch Context");
    }
    return dispatch;

};
