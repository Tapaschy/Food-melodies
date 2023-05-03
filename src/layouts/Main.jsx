import React from 'react';
import Header from '../pages/Header/Header';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Category from '../pages/Chefcategory/Category';

const Main = () => {
    const chefCategory = useLoaderData();
    console.log(chefCategory);
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container className='mt-4'>
                <Row>
                    <Col lg={8}>
                        <Image src="https://plus.unsplash.com/premium_photo-1669687760005-89584766cd99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" fluid rounded />
                    </Col>
                    <Col lg={4} className='fs-4'>
                        <h4>Our goal</h4>
                        <p>The Supernatural brand features an exciting, plant-based way to get creative in the kitchen. All of their powder products and recipes are vibrant in color, better for you and fun to use in the kitchen!</p>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-4'>
                <h2 className='text-center'>Our <span className='color-3'>Chef</span></h2>
                <div>
                    <Row xs={1} md={3} className="g-4">
                        {
                            chefCategory.map(chef => <Category
                                key={chef.id}
                                chef={chef}
                            ></Category>)
                        }
                     </Row>
                </div>

            </Container>

        </div>
    );
};

export default Main;