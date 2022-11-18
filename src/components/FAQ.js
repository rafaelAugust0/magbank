import React, { useState, useEffect } from "react";
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
        className="btn btn-link"
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

        const [index, setIndex] = useState(0);

        const handleClick = key => {
            console.log(key);
            setIndex(key);
        }

        useEffect(() => {
            console.log(index);
        }, [index])

    return (
        <section className="faq text-light">
            <Container className="py-5" id="faq">
                <h2 className="my-5 faq-title"> Dúvidas frequentes</h2>
                <Row className="d-flex align-items-center justify-content-center">
                    <Col className="d-lg-none mb-5" xs={12}>
                        <Row>
                            {options.map(({icon}, key) => (
                                <Col className="d-flex align-items-center justify-content-center" key={key}>
                                    <FontAwesomeIcon icon={icon} size="2x" color={key === index ? '#fff' : '#bbb'} 
                                                        onClick={() => handleClick(key)} />
                                </Col>
                            ))}
                        </Row>
                        <Row className="justify-content-center text-center mt-5">
                            <p className="lead">
                                {options[index].text}
                            </p>
                        </Row>
                    </Col>

                    <Col className="d-none d-lg-block">
                        {options.map(({icon, text}, key) => (
                            <IconText icon={icon} size={3} className=" faq-icon-text mb-3" textClassName="lead"
                                        color={key === index ? '#fff' : '#bbb'}
                                        onClick={() => handleClick(key)} key={key}>
                                {text}
                            </IconText>
                        ))}
                    </Col>

                    <Col>
                    <Accordion defaultActiveKey='0' activeKey={`${index}`}>
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