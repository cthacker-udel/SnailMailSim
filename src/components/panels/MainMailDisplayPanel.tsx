import React from "react";
import { Table } from "react-bootstrap";
import { UseDispatchContext } from "../../reducer/UseDispatchContext";
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
                    </tr>
                </thead>
                <tbody>

                    {
                        state.messages.map((eachMessage) => {
                            return(
                            <>
                                <td>{eachMessage.sender}</td>
                                <td>{eachMessage.message}</td>
                            </>
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