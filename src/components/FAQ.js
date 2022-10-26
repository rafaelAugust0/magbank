import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import IconText from './IconText';
import { faCreditCard, faWallet, faShieldAlt, faUserTie } from "@fortawesome/free-solid-svg-icons";

const FAQ = () => (
    <Container>
        <Row>
            <Col>
                <IconText icon={faCreditCard}>Cartão de crédito e débito</IconText>
                <IconText icon={faWallet}>Conta e abertura</IconText>
                <IconText icon={faShieldAlt}>Token digital</IconText>
                <IconText icon={faUserTie}>Produtos e serviços</IconText>
            </Col>

            <Col>

            </Col>
        </Row>
    </Container>
);


export default FAQ;