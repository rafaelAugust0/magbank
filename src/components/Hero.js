import React from 'react';
import { Button, Image } from 'react-bootstrap';
import logo from '../assets/logo__magic-pay.png';

const Hero = () => (
    <div class='jumbotron' className='text-center'>
        <Image src={logo} />
            <p>Pague suas contas pelo nosso APP</p>
            <Button variant="outline-light">
                Abra sua conta
            </Button>
    </div>
);

export default Hero;