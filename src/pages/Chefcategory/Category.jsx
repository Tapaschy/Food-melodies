import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Category = ({ chef }) => {
    const {id ,name, picture, years_of_experience, num_recipes, likes } = chef;

    return (
        <div>

            <Col>
                <Card>
                    <Card.Img variant="top" src={picture} style={{
                        width: "100 %",
                        height: "25vw",}}/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>

                        </Card.Text>
                        <h6>Experience: {years_of_experience} years</h6>
                        <h6>Numbers of recipes: {num_recipes}</h6>
                        <h6>likes: {likes}</h6>
                        <Link to={`/chef/${id}`}><Button variant="danger">View Recipes</Button></Link>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Category;