import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UseDispatchContext } from "../../reducer/UseDispatchContext";
import { UseStateContext } from "../../reducer/UseStateContext";
import { MainPageNavbar } from "../util/MainPageNavbar";

export const SendMailPanel = (): JSX.Element => {

    const [sender, setSender] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const { state } = UseStateContext();
    const { dispatch } = UseDispatchContext();

    const clickHandler = () => {

        dispatch({type: "addMessage", payload: {
            ...state,
            newMessage: {
                sender: sender,
                message: message,
                time: new Date()
            }
        }})

    };

    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <MainPageNavbar />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>

                            <Form.Group className="mb-3" controlId="formBasicSender">
                                <Form.Label>Sender</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter sender"
                                    onChange={(e) => {
                                        setSender(e.target.value);
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    type="textbox"
                                    placeholder="Enter message"
                                    onChange={(e) => {
                                        setMessage(e.target.value);
                                    }}
                                />
                            </Form.Group>

                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/mainpage">
                            <Button variant="primary" onClick={() => clickHandler()}>Send Message</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    );

}