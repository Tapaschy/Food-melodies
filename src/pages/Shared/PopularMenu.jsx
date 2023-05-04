import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const PopularMenu = () => {
    return (
        <div>
            <Container className='mt-5'>
                <h2 className='text-center'>Popular Menu</h2>
                <Row>
                    <Col lg={4} className='fs-4'>
                        <Image src="https://wpbingosite.com/wordpress/foodpa/wp-content/uploads/2023/03/Products-19.jpg" fluid rounded />
                        <h5>MINI CUCINE</h5>
                        <p className='fs-6'>The Mini Cucine Cookware Set is an essential item for anyone who loves cooking. This set includes three versatile pots that can handle all of your cooking needs, from stir-frying, sautéing, and braising to boiling, steaming, and frying. Made of high-quality stainless steel, the pots are durable, heat-resistant, and easy to clean.</p>
                    </Col>
                    <Col lg={4} className='fs-4'>
                        <Image src="https://wpbingosite.com/wordpress/foodpa/wp-content/uploads/2023/03/Products-25.jpg" fluid rounded />
                        <h5>Classic Cheeseburger</h5>
                        <p className='fs-6'>Our Whopper Burger is a classic fast food item that’s been satisfying hunger cravings for decades. Made with a flame-grilled beef patty, fresh lettuce, ripe tomatoes, onions, pickles, ketchup, and mayonnaise, all on a sesame seed bun. This burger is juicy, flavorful, and perfect for those who crave a hearty meal</p>
                    </Col>
                    <Col lg={4} className='fs-4'>
                        <Image src="https://wpbingosite.com/wordpress/foodpa/wp-content/uploads/2023/03/Products-1.jpg" fluid rounded />
                        <h5>BURGER KING</h5>
                        <p className='fs-6'>Our Whopper Burger is a classic fast food item that’s been satisfying hunger cravings for decades. Made with a flame-grilled beef patty, fresh lettuce, ripe tomatoes, onions, pickles, ketchup, and mayonnaise, all on a sesame seed bun. This burger is juicy, flavorful, and perfect for those who crave a hearty meal.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PopularMenu;