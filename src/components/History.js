import React from "react";
import { Row, Col, Container, Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import './History.scss'

function History({name, account}) {

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
                            <h4>{name}</h4>
                            <p className='text-muted'>{account}</p>
                        </Col>
                    </Row>

                    <Link to='/dashboard'>
                        <Button className='d-block options' variant='link' size='lg' >
                            Minha Conta
                        </Button>
                    </Link>

                    <Link to='/dashboard/payments'>
                        <Button className='d-block options' variant='link' size='lg' >
                            Pagamentos
                        </Button>
                    </Link>

                    <Link to='/dashboard/history'>
                        <Button className='d-block active options' variant='link' size='lg'>
                            Extrato
                        </Button>
                    </Link>
                </Col>
                <Col xs={12} lg={8} className="mt-5 pt-5 d-lg-none">
                    <h3>Extrato de conta corrente</h3>
                    <Table striped borderless>
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>17/07</td>
                                <td>SAQUE 24H 012345</td>
                            </tr>
                            <tr>
                                <td>17/07</td>
                                <td>SALDO DO DIA</td>
                            </tr>
                            <tr>
                                <td>19/07</td>
                                <td>ESTACIONAMENTO 123234</td>
                            </tr>
                            <tr>
                                <td>19/07</td>
                                <td>COMPRA INTERNET 234232</td>
                            </tr>
                            <tr>
                                <td>19/07</td>
                                <td>SALDO DO DIA</td>
                            </tr>
                            <tr>
                                <td>21/07</td>
                                <td>SUPERMERCADO 534324335</td>
                            </tr>
                            <tr>
                                <td>21/07</td>
                                <td>ESTACIONAMENTO 342134</td>
                            </tr>
                            <tr>
                                <td>21/07</td>
                                <td>SHOPPING 4235232</td>
                            </tr>
                            <tr>
                                <td>21/07</td>
                                <td>SALDO DO DIA</td>
                            </tr>
                            <tr>
                                <td>22/07</td>
                                <td>SUPERMERCADO 9439482</td>
                            </tr>
                            <tr>
                                <td>22/07</td>
                                <td>DEPÓSITO 1234543</td>
                            </tr>
                            <tr>
                                <td>22/07</td>
                                <td>SALDO DO DIA</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>

                <Col xs={12} lg={8} className="mt-5 pt-5 d-none d-sm-block">
                    <h3>Extrato de conta corrente</h3>
                    <Table striped borderless>
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Descrição</th>
                                <th>Valor (R$)</th>
                                <th>Saldo (R$)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>17/07</td>
                                <td>SAQUE 24H 012345</td>
                                <td className="decrease">200,00-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>17/07</td>
                                <td>SALDO DO DIA</td>
                                <td></td>
                                <td>
                                    <strong>2.780,00</strong>
                                </td>
                            </tr>
                            <tr>
                                <td>19/07</td>
                                <td>ESTACIONAMENTO 123234</td>
                                <td className="decrease">12,00-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>19/07</td>
                                <td>COMPRA INTERNET 234232</td>
                                <td className="decrease">450,00-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>19/07</td>
                                <td>SALDO DO DIA</td>
                                <td></td>
                                <td>
                                    <strong>2.318,00</strong>
                                </td>
                            </tr>
                            <tr>
                                <td>21/07</td>
                                <td>SUPERMERCADO 534324335</td>
                                <td className="decrease">275,90-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>21/07</td>
                                <td>ESTACIONAMENTO 342134</td>
                                <td className="decrease">12,00-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>21/07</td>
                                <td>SHOPPING 4235232</td>
                                <td className="decrease">180,00-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>21/07</td>
                                <td>SALDO DO DIA</td>
                                <td></td>
                                <td>
                                    <strong>1.851,00</strong>
                                </td>
                            </tr>
                            <tr>
                                <td>22/07</td>
                                <td>SUPERMERCADO 9439482</td>
                                <td className="decrease">275,90-</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>22/07</td>
                                <td>DEPÓSITO 1234543</td>
                                <td>
                                    <strong className="increase">1.000,00</strong>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>22/07</td>
                                <td>SALDO DO DIA</td>
                                <td></td>
                                <td>
                                    <strong>2.576,00</strong>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
)}

export default History;