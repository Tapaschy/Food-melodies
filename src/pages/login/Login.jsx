import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link,useLocation, useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { UserToContext } from '../../provider/UserContext';


const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const {singIn}=useContext(UserToContext);
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/'
    const handleLogin=event=>{

        event.preventDefault();

        const form =event.target;
        const email=form.email.value;
        const password =form.password.value;
        console.log(email,password);
        
        setError('');
        setSuccess('');
        if ((password.length < 6)) {
            setError('Please add at 6 character');
            return
        }

        singIn(email,password)
            .then(result=>{
                const loggedUser=result.user;
                console.log(loggedUser);
                navigate(from,{replace:true});
                setError('');
            })
            .catch(error=>{
                setError(error.message);
            })
    };
    const [user,setUser]=useState('');
     const auth =getAuth(app);
     const provider = new GoogleAuthProvider();
     const githubProvider = new GithubAuthProvider();

     const handleGoogleSignIn =()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
            const googleUser =result.user;
            setUser(googleUser)
            navigate(from,{replace:true})
        })
        .catch(error=>{
            console.log(error);
        })
     }
     const handleGithubSignIn =()=>{
        signInWithPopup(auth,githubProvider)
        .then(result=>{
            const githubUser =result.user;
            navigate(from,{replace:true})
            setUser(githubUser)
        })
        .catch(error=>{
            console.log(error);
        })
     }
    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="success" type="submit" className='mb-2 w-100'>
                    Login
                </Button>
                <br />
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">
                    <Button onClick={handleGoogleSignIn} variant="success" type="submit" className='mb-2 w-100'>
                        Login With Google
                    </Button>
                    <Button onClick={handleGithubSignIn} variant="success" type="submit" className='mb-2 w-100'>
                        Login With Github
                    </Button>
                </Form.Text>
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
            </Form>
            <p className='text-danger'>{error}</p>
        </Container>
    );
};

export default Login;