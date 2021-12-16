import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { UseDispatchContext } from "../../reducer/UseDispatchContext";
import { UseStateContext } from "../../reducer/UseStateContext";
import { MainPageNavbar } from "../util/MainPageNavbar";

export const RemoveMailPanel = () => {

    const { state } = UseStateContext();
    const { dispatch } = UseDispatchContext();

    const removeMail = (index: number) => {

        dispatch({type: "removeMessage", payload: { ...state, removalIndex: index}});

    }


    return(
        <>
            <MainPageNavbar />
            <Table>
                <thead>
                    <tr>
                        <th>Sender</th>
                        <th>Message</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        state.messages.map((eachMessage, index) => {
                            return(
                                <tr key={index}>
                                    <td>{eachMessage.sender}</td>
                                    <td>{eachMessage.message}</td>
                                    <td>{eachMessage.time.toUTCString()}</td>
                                    <td><Button variant="danger" onClick={() => removeMail(index)}></Button></td>
                                </tr>
                            );
                        })
                    }

                </tbody>

            </Table>
        </>
    );

};