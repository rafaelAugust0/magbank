import React from "react";
import {Link} from "react-router-dom";
import { Row, Col, Form, Button, Image } from "react-bootstrap";

import logo from '../assets/logo.svg'
import './Login.scss'


const Login = () => (
    <section className="login">
        <div className="login__container">
        <Row>
            <Col className="text-center text-light">
                <Image src={logo} className="mb-5" />
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Número da conta</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>

                    <Button variant="success" type="submit">
                        Criar conta
                    </Button>
                </Form>
            </Col>
        </Row>
        </div>
    </section>
);

export default Login;