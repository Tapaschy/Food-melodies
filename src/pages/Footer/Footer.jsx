import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='color-nav'>
            <Container className='mt-5 pt-5'>
                <Row>
                    <Col lg={6} className='fs-4'>
                        <h1>Food <span className='color-1'>Melodies</span></h1>
                        <p className='fs-6'>Provide you best Food ..  </p>
                    </Col>
                    <Col lg={6} className='fs-4'>
                        <h5>OPENING HOURS</h5>
                        <p className='fs-6'>Mon – Thu: 10:00 Am – 01:00 Am </p>
                            <p className='fs-6'> Saturday: 11:00 Am To Midnight</p>
                            <p className='fs-6'> Sunday: Kitchen Closeds  </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;