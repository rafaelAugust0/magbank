import React from "react";
import { Row, Col, Container, Image} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

import logo from '../assets/magbank-footer.png'
import gplay from '../assets/googleplay.png'
import appstore from '../assets/applestore.png'

import './Footer.scss'

const Footer = () => (
    <footer className="footer">
        <Container>
            <Row className="text-center py-5">
                <Col xs={12} lg={6} className="text-lg-left">
                    <Image src={logo} className="logo" />
                </Col>

                <Col xs={12} lg={4} className="py-xs-5">
                    <Image src={gplay} />
                    <Image src={appstore} className="mx-2"/>
                </Col>

                <Col xs={12} lg={2} className="d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faFacebookSquare} size="2x" color="#7c7c7c" className="mx-2"/>
                    <FontAwesomeIcon icon={faTwitter} size="2x" color="#7c7c7c" className="mx-2"/>
                    <FontAwesomeIcon icon={faYoutube} size="2x" color="#7c7c7c" className="mx-2"/>
                </Col>
            </Row>
        </Container>
    </footer>
)

export default Footer;