import React from 'react';
import { Container, Image, Row, TabContainer } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Recepies from './Recepies';

const ChefDetials = () => {
    const chefDetails = useLoaderData();
    console.log(chefDetails);
    const { name, picture, years_of_experience, num_recipes, likes, bio } = chefDetails;

    return (
        <div>
            <Container className='mt-5'>
                <Image src={picture} fluid rounded  style={{
                    width: "100vw",
                    height: "100vh",
                }}/>
                <h4 className='mb-4 mt-4'>{name}</h4>
                <p><span className='h6'>Description</span> : {bio}</p>
                <p><span className='h6'>Experience</span> : {years_of_experience} years</p>
                <p><span className='h6'>Likes</span> : {likes} </p>
                <p><span className='h6'>Total have</span> : {num_recipes} recipies</p>
            </Container>
            <Container>
                <div>
                    <Row xs={1} md={3} className="g-4">
                        {
                            chefDetails.recipes.map(chef =><Recepies
                                key={chef._id}
                                chef={chef}>
                                
                            </Recepies>)
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default ChefDetials;