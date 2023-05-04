import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OurBlogs = () => {
    return (
        <div>
            <Container className='mt-5'>
                <h2 className='text-center'>Our Blogs</h2>
                <Row>
                    <Col lg={4} className='fs-4'>
                        <Image src="https://wpbingosite.com/wordpress/foodpa/wp-content/uploads/2023/01/2.jpg" fluid rounded />
                        <h5>Simple Mills Almond Flour</h5>
                        <p className='fs-6'>The Mini Cucine Cookware Set is ....  </p>
                        <Link>Read more...</Link>
                    </Col>
                    <Col lg={4} className='fs-4'>
                        <Image src="https://wpbingosite.com/wordpress/foodpa/wp-content/uploads/2023/01/3.jpg" fluid rounded />
                        <h5>Simple Mills Almond Flour</h5>
                        <p className='fs-6'>The Mini Cucine Cookware Set is ....  </p>
                        <Link>Read more...</Link>
                    </Col>
                    <Col lg={4} className='fs-4'>
                        <Image src="https://wpbingosite.com/wordpress/foodpa/wp-content/uploads/2023/01/1.jpg" fluid rounded />
                        <h5>Simple Mills Almond Flour</h5>
                        <p className='fs-6'>The Mini Cucine Cookware Set is ....  </p>
                        <Link>Read more...</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurBlogs;