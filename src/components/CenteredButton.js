import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';

const CenteredButton = ({ children, onClick }) => (
    <Container>
        <Row className='d-flex justify-content-center'>
        <Button className='my-5 w-50' variant='success' size='lg' onClick={onClick}>
            {children}
        </Button>
        </Row>
    </Container>
);

export default CenteredButton;