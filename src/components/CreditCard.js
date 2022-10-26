import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { faCreditCard, faMobile, faShoppingCart, faWallet} from '@fortawesome/free-solid-svg-icons';
import creditCard from '../assets/credit-card.jpg';
import './CreditCard.scss';
import IconText from './IconText';

const CreditCard = () => (
        <Container className='my-5'>
        <Row>
            <Col xs={12} lg={7} className='mb-5 mb-lg-0 px-5 px-lg-0'>
            <Row>
                <h2 className='display-4 my-5'>Cartão de crédito</h2>
            </Row>
            <Row>
                <Col xs={12} lg={6} className='mb-4'>
                    <IconText icon={faCreditCard} size={2} color='#f05656' textClassName='text-muted'>
                        Crédito Pessoal
                    </IconText>
                </Col>

                <Col xs={12} lg={6} className='mb-4'>
                    <IconText icon={faMobile} size={2} color='#f05656' textClassName='text-muted'>
                        APP
                    </IconText>
                </Col>
                
                <Col xs={12} lg={6} className='mb-4'>
                    <IconText icon={faShoppingCart} size={2} color='#f05656' textClassName='text-muted'>
                        Pagamentos Online
                    </IconText>
                </Col>

                <Col xs={12} lg={6} className='mb-4'>
                    <IconText icon={faWallet} size={2} color='#f05656' textClassName='text-muted'>
                        Pagamento Digital
                    </IconText>
                </Col>
            </Row>
            </Col>
            <Col xs={12} lg={5}>
            <Image src={creditCard} alt='Magbank Credit Card Example' fluid />
            </Col>
        </Row>
        </Container>
);

export default CreditCard;