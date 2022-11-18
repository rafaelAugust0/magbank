import React from 'react';
import { Button, Image, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo__magic-pay--mobile.png';
import logoDesktop from '../assets/logo__magic-pay.png';
import './Hero.scss';

const Hero = ({handleCreateAcc}) => (
    <div className=' jumbotron text-center text-light hero py-5'>
        <Row className='py-lg-5 rmv-margin'>
            <Col lg className='text-lg-right my-lg-5'>
                <Image className='d-lg-none' src={logo} />
                <Image className='d-none d-lg-inline-block' src={logoDesktop} />
            </Col>

            <Col lg className='text-lg-left my-lg-5 p-lg-5'>
                <p>Pague suas contas pelo nosso APP</p>
                <Button variant="outline-light" onClick={handleCreateAcc}>
                    Abra sua conta
                </Button>
            </Col>
        </Row>
    </div>
);

export default Hero;