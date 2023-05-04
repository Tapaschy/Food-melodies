import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserToContext } from '../../provider/UserContext';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { register } = useContext(UserToContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        // console.log(name,email,password)
        setError('');
        setSuccess('');
        if ((password.length < 6)) {
            setError('Please add at least 6 character.');
            return
        }
        register(email, password)
            .then(result => {
                const loggedUser = result.user;
                updateProfile(loggedUser,{
                    displayName:name,
                    photoURL:photo,
                });
                setSuccess('User created successfully.');
                setError('');
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    };
    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="success" type="submit" className='w-100 '>
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already Have an Account? <Link to="/login">Login</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
            <p className='text-success'>{success}</p>
            <p className='text-danger'>{error}</p>
        </Container>
    );
};

export default Register;