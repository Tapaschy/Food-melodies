import React from 'react';
import { Card, Col, ListGroup } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';

const Recepies = ({ chef }) => {
    const { name, picture, ingredients,instructions } = chef;
    return (
        <Col>
            <Card>
                <LazyLoad threshold={0.95}>
                <Card.Img variant="top" src={picture} />
                </LazyLoad>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <h4 className='ps-3'>Ingredients</h4>
                    {
                        chef.ingredients.map((ingredient,i) => <ListGroup.Item
                        key={i}
                        >{ingredient}</ListGroup.Item>)
                    }
                </ListGroup>
                <Card.Body>
                    <Card.Title>Insturction</Card.Title>
                    <Card.Text>
                        {instructions}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Recepies;