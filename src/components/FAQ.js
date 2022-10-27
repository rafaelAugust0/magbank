import React from "react";
import { Row, Col, Container, Accordion, Card, Button } from "react-bootstrap";
import IconText from './IconText';
import { faCreditCard, faWallet, faShieldAlt, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FAQ = () => (
    <Container>
        <Row>
            <Col className="d-lg-none" xs={12}>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={faCreditCard} size='2x' />
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faWallet} size='2x' />
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faShieldAlt} size='2x' />
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faUserTie} size='2x' />
                    </Col>
                </Row>
            </Col>

            <Col className="d-none d-lg-block">
                <IconText icon={faCreditCard} size={3}>
                    Cartão de crédito e débito
                </IconText>
                <IconText icon={faWallet} size={3}>
                    Conta e abertura
                </IconText>
                <IconText icon={faShieldAlt} size={3}>
                    Token digital
                </IconText>
                <IconText icon={faUserTie} size={3}>
                    Produtos e serviços
                </IconText>
            </Col>

            <Col>
            {/* <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant='link' eventKey="0">
                            Click me!
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant='link' eventKey="1">
                            Click me!
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion> */}
            </Col>
        </Row>
    </Container>
);


export default FAQ;