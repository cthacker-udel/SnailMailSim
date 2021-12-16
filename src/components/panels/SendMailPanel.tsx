import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UseDispatchContext } from "../../reducer/UseDispatchContext";
import { UseStateContext } from "../../reducer/UseStateContext";
import { MainPageNavbar } from "../util/MainPageNavbar";

export const SendMailPanel = (props: any): JSX.Element => {

    const [sender, setSender] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const { state } = UseStateContext();
    const { dispatch } = UseDispatchContext();
    const [loadingAnimation, setLoadingAnimation] = useState<boolean>(false);
    let navigate = useNavigate();

    const clickHandler = () => {

        dispatch({type: "addMessage", payload: {
            ...state,
            newMessage: {
                sender: sender,
                message: message,
                time: new Date()
            }
        }});
        navigate('/mainpage');
        

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
                            <Button variant="primary" onClick={() => {
                                setLoadingAnimation(true);
                                setTimeout(() => {
                                    setLoadingAnimation(false);
                                    clickHandler();
                                }, 1000);
                            }}>{loadingAnimation ? <Spinner animation="border" /> : "Send Message"}</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );

}