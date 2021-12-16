import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MainPageNavbar } from "../util/MainPageNavbar";

export const SendMailPanel = () => {

    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <MainPageNavbar />
                    </Col>
                </Row>
            </Container>
        </>
    );

}