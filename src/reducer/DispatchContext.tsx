import { MailAction } from "../interfaces/MailAction";
import React from "react";

export const DispatchContext = React.createContext<{dispatch: React.Dispatch<MailAction>} | undefined>(undefined);