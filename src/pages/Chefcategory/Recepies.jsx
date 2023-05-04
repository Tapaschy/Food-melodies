import React, { useState } from 'react';
import { Button, Card, Col, ListGroup } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recepies = ({ chef }) => {
    const { name, picture, ingredients,instructions } = chef;
    const [isactive,setIsActive]=useState(true);
    const handleonClink =event=>{
        setIsActive(current=>!current);
        if(isactive){
            toast("Added to favorite"); 
        }
        else{
            toast("Remove from favorite");
        }
    }


    return (
        <Col>
            <Card>
                <LazyLoad threshold={0.95}>
                <Card.Img variant="top" src={picture} />
                </LazyLoad>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span onClick={handleonClink}>{isactive?<FaRegHeart />:<FaHeart />}</span>
                        
                        <ToastContainer/>
                    
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