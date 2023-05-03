import React from 'react';
import { Card, Col, ListGroup } from 'react-bootstrap';

const Recepies = ({ chef }) => {
    const { name, picture, ingredients,instructions } = chef;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <h4 className='text-center'>Ingredients</h4>
                    {
                        chef.ingredients.map((ingredient,i) => <ListGroup.Item
                        key={i}
                        >{ingredient}</ListGroup.Item>)
                    }
                </ListGroup>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {instructions}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Recepies;