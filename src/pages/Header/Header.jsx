import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
            <div className='mb-4 mt-4'><h1>Food <span className='color-1'>Melodies</span></h1></div>
        </Container>
    );
};

export default Header;