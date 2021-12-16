import React from "react";
import { MainMailDisplayPanel } from "./panels/MainMailDisplayPanel";
import { MainPageNavbar } from "./util/MainPageNavbar";

export const MainPage = () => {

    return(
        <>
            <MainPageNavbar />
            <MainMailDisplayPanel />
        </>
    );

}