import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserToContext } from '../../../provider/UserContext';

const NavigationBar = () => {
    const { user, logOut } = useContext(UserToContext);
    console.log(user)
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='color-nav' variant="light" style={{ height: "50px" }}>
                <Container>
                    <Navbar.Brand href="#home"><h3>Food <span className='color-1'>Melodies</span></h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto text-white">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Blog">Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ? <>
                                    <div><Image src={user.photoURL} className='me-4' roundedCircle style={{height:"30px"}} data-bs-toggle="tooltip" data-bs-placement="top" title={user.displayName}/>
                                    <Button onClick={handleLogout} className="color-nav">log Out</Button></div>
                                </> : <span><Link to="/login">Logins</Link></span>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;