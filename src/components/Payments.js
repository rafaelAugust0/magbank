import React from "react";
import { Container, Row, Col, Button, Tabs, Form, Tab } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


import '../components/Payments.scss'


function Payment() {

    return (
        <Container className='dashboard py-5'>
            <Row>
                <Col xs={12} lg={4}>
                    <Row className='align-items-center mb-5'>
                        <Col xs={3}>
                            <span className='dashboard__user-avatar' >
                                
                                <FontAwesomeIcon icon={faCircle} size='5x' color='#f8f9fa' />
                                <FontAwesomeIcon className='dashboard__user-icon' icon={faUser} size='3x' color='#7c7d7d' />
                            </span>
                        </Col>
                        <Col xs={9}>
                            <h4>Rafael Augusto</h4>
                            <p className='text-muted'>ag: 1234 c/c: 4321-5</p>
                        </Col>
                    </Row>

                    <Link to='/dashboard'>
                        <Button className='d-block options' variant='link' size='lg' >
                            Minha Conta
                        </Button>
                    </Link>

                    <Link to='/dashboard/payments'>
                        <Button className='d-block active options' variant='link' size='lg' >
                            Pagamentos
                        </Button>
                    </Link>

                    <Link to='/dashboard/history'>
                        <Button className='d-block options' variant='link' size='lg'>
                            Extrato
                        </Button>
                    </Link>

                </Col>
                <Col xs={12} lg={8} className='mt-lg-5 pt-lg-5'>
                    <h3 className="mt-4 mb-3">Pagamentos</h3>
                    <Tabs className='mt-5 pt-lg-2' defaultActiveKey='boleto'>
                        <Tab eventKey='boleto' title='Boleto'>
                            <Form>
                                <Form.Group controlId="formBarCode" className="my-5">
                                    <Form.Label>Código de barras</Form.Label>
                                    <Form.Control type="number" placeholder="Insira o código de barras" />
                                </Form.Group>

                                <Form.Group controlId="formPaymentType" className="mb-5">
                                    <Form.Label>Forma de pagamento</Form.Label>
                                    <div className="d-flex payment-form">
                                        <Form.Check type="radio" id="debit" label="Débito em Conta Corrente" name='paymentType' />
                                        <Form.Check type="radio" id="credit" label="Cartão de Crédito" name='paymentType' />
                                    </div>
                                </Form.Group>
                                <Button variant="success">Continuar</Button>
                            </Form>
                        </Tab>
                        <Tab eventKey='transfer' title='Transferência'>
                            <Form>
                                <div className="d-flex mt-5 inmobile-wrap">
                                    <Form.Group controlId="bankSelect" className="my-3 mx-3">
                                        <Form.Label>Banco</Form.Label>
                                        <Form.Select>
                                            <option disabled selected>
                                                Selecione
                                            </option>
                                            <option value='1'>Inter</option>
                                            <option value='2'>Nubank</option>
                                            <option value='3'>C6 Bank</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group controlId="agency" className="my-3 mx-3">
                                        <Form.Label>Agência</Form.Label>
                                        <Form.Control type='number'/>
                                    </Form.Group>

                                    <Form.Group controlId="account" className="my-3 mx-3">
                                        <Form.Label>Conta corrente</Form.Label>
                                        <Form.Control type='number'/>
                                    </Form.Group>
                                </div>

                                <div className="d-flex mb-3 inmobile-col">
                                    <Form.Group controlId="value" className="my-3 mx-3">
                                        <Form.Label>Valor da transferência</Form.Label>
                                        <Form.Control type='number'/>
                                    </Form.Group>

                                    <Form.Group controlId="extractIdentify" className="mx-3 my-3">
                                        <Form.Label>Identificação nos extratos</Form.Label>
                                        <Form.Control type='number'/>
                                    </Form.Group>
                                </div>
                                <Button variant="success">Continuar</Button>
                            </Form>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    )
}

export default Payment;