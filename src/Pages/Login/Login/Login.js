import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    return (
        <div className='container w-50 mt-3 mx-auto'>
            <h2 className='text-primary text-center'>Please Login</h2>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='d-flex jutify-content-start' variant="primary" type="submit">
                    Login
                </Button>



                <p className='mt-3 text-start'>New to Electro Store? <span style={{ cursor: 'pointer' }} className='text-danger'>Please Register</span></p>
            </Form>




        </div>
    );
};

export default Login;