import { State } from "../interfaces/State";
import React from "react";

export const StateContext = React.createContext<{state: State} | undefined>(undefined);