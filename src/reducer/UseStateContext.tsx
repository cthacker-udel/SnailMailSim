import { State } from "../interfaces/State";
import React from "react";
import { StateContext } from "./StateContext";

export const UseStateContext = (): {state: State} => {

    const state = React.useContext(StateContext);
    if (state === undefined) {
        throw new Error("Unable to access StateContext");
    }
    return state;

};
