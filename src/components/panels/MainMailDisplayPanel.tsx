import React from "react";
import { Table } from "react-bootstrap";
import { UseStateContext } from "../../reducer/UseStateContext";

export const MainMailDisplayPanel = (): JSX.Element => {

    const { state } = UseStateContext();

    return(
        <>
        
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
                                </tr>
                            );
                        })
                    }

                </tbody>

            </Table>
        
        </>

    );


}

/*

    



*/