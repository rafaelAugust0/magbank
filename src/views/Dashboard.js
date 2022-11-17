import React from 'react'
import { Container, Row, Col, Button, Tabs, Tab, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"
import './Dashboard.scss'

const Dashboard = ({name, account}) => (
    <Container className='dashboard py-5'>
        <Row>
            <Col xs={12} lg={4}>
                <Row className='align-items-center mb-5'>
                    <Col xs={3}>
                        <span className='dashboard__user-avatar'>
                            <FontAwesomeIcon icon={faCircle} size='5x' color='#f8f9fa' />
                            <FontAwesomeIcon className='dashboard__user-icon' icon={faUser} size='3x' color='#7c7d7d'/>
                        </span>
                    </Col>
                    <Col xs={9}>
                        <h4>{name}</h4>
                        <p className='text-muted'>{account}</p>
                    </Col>
                </Row>

                <Link to='/dashboard'>
                    <Button className='d-block active options' variant='link' size='lg' >
                        Minha Conta
                    </Button>
                </Link>

                <Link to='/dashboard/payments'>
                    <Button className='d-block options' variant='link' size='lg' >
                        Pagamentos
                    </Button>
                </Link>

                <Link to='/dashboard/history'>
                    <Button className='d-block options' variant='link' size='lg'>
                        Extrato
                    </Button>
                </Link>
            </Col>

            <Col xs={12} lg={3} className='mt-lg-5 pt-lg-4'>
                <h3 className='my-5'>Conta Corrente</h3>
                <h6>
                    <small>
                        <strong>Saldo em conta corrente</strong>
                    </small>
                </h6>
                <h4 className='text-success mb-5'>
                    <small>R$</small>3.500<small>,00</small>
                </h4>
                <h6>
                    <small>
                        <strong>Cheque Especial</strong>
                    </small>
                </h6>
                <p className='mb-0'>Limite disponível</p>
                <p className='mb-4'>5.000,00</p>
                <Button variant='secondary'>Ver extrato</Button>
            </Col>

            <Col xs={12} lg={5} className='mt-lg-5 pt-lg-5'>
                <Tabs className='mt-5 pt-lg-5' defaultActiveKey='latest'>
                    <Tab eventKey='latest' title='Últimos lançamentos'>
                        <Table striped borderless>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Descrição</th>
                                    <th>Valor (R$)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>22/07</td>
                                    <td>SAQUE 24H 012345</td>
                                    <td>300,00</td>
                                </tr>
                                <tr>
                                    <td>21/07</td>
                                    <td>SUPERMERCADO 2312332</td>
                                    <td>275,90</td>
                                </tr>
                                <tr>
                                    <td>21/07</td>
                                    <td>ESTACIONAMENTO 123234</td>
                                    <td>12,00</td>
                                </tr>
                                <tr>
                                    <td>21/07</td>
                                    <td>PAGAMENTO ALUGUEL 123432</td>
                                    <td>1.500,00</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey='next' title='Lançamentos futuros'>
                        <Table striped borderless>
                                <thead>
                                    <tr>
                                        <th>Data</th>
                                        <th>Descrição</th>
                                        <th>Valor (R$)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>22/08</td>
                                        <td>COMPRAS ATAKADO 788956</td>
                                        <td>700,00</td>
                                    </tr>
                                    <tr>
                                        <td>21/08</td>
                                        <td>POSTO DE GASOLINA 324245</td>
                                        <td>50,00</td>
                                    </tr>
                                    <tr>
                                        <td>21/08</td>
                                        <td>FACULDADE 897978</td>
                                        <td>375,00</td>
                                    </tr>
                                    <tr>
                                        <td>21/08</td>
                                        <td>MECÂNICA 24H 345534</td>
                                        <td>125,89</td>
                                    </tr>
                                </tbody>
                        </Table>
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    </Container>
)

export default Dashboard;