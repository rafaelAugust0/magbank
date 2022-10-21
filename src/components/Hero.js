import React from 'react';
import { Button, Image, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo__magic-pay.png';

const Hero = () => (
    <div class='jumbotron' className='text-center text-light'>
        <Row className='my-lg-5'>
            <Col lg className='text-lg-right my-lg-5'>
                <Image src={logo} />
            </Col>

            <Col lg className='text-lg-left my-lg-5'>
                <p>Pague suas contas pelo nosso APP</p>
                <Button variant="outline-light">
                    Abra sua conta
                </Button>
            </Col>
        </Row>
    </div>
);

export default Hero;