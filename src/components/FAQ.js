import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import IconText from "./IconText";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import {
    faCreditCard,
    faWallet,
    faShieldAlt,
    faUserTie,
    } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

    import './FAQ.scss'


    function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log("totally custom!")
    );

    return (
        <button
        class="btn btn-link"
        type="button"
        style={{ backgroundColor: "unset" }}
        onClick={decoratedOnClick}
        >
        {children}
        </button>
    );
    }
    function FAQ() {

        const options = [
            {icon: faCreditCard, text: 'Cartão de crédito'},
            {icon: faWallet, text: 'Conta e abertura'},
            {icon: faShieldAlt, text: 'Token digital'},
            {icon: faUserTie, text: 'Produtos e serviços'}
        ];

    return (
        <section className="faq text-light">
            <Container className="py-5">
                <h2 className="my-5 faq-title"> Dúvidas frequentes</h2>
                <Row className="d-flex align-items-center justify-content-center">
                    <Col className="d-lg-none mb-5" xs={12}>
                        <Row>
                            {options.map(({icon}) => (
                                <Col className="d-flex align-items-center justify-content-center">
                                    <FontAwesomeIcon icon={icon} size="2x" />
                                </Col>
                            ))}
                        </Row>
                    </Col>

                    <Col className="d-none d-lg-block">
                        {options.map(({icon, text}) => (
                            <IconText icon={icon} size={3} className="mb-3" textClassName="lead" color="#fff">
                                {text}
                            </IconText>
                        ))}
                    </Col>

                    <Col>
                    <Accordion defaultActiveKey="0">
                    <Card className="faq-card">
                        <Card.Header>
                        <CustomToggle eventKey="0">Lorem ipsum dolor sit amet</CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card className="faq-card">
                        <Card.Header>
                        <CustomToggle eventKey="1">Nulla porttitor eros ac ex tristique posuere</CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card className="faq-card">
                        <Card.Header>
                        <CustomToggle eventKey="2">Quisque fringilla tincidunt arcu</CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card className="faq-card">
                        <Card.Header>
                        <CustomToggle eventKey="3">Nam elementum lobortis purus a maximus tortor</CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default FAQ;