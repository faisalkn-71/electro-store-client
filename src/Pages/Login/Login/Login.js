import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    let errorElement;
    if (error) {
        errorElement =
            <div>
                <p className='text-danger mt-2'>Error: {error?.message}</p>
            </div>;
    }

    if(loading || sending){
        return <Loading></Loading>
    }

    if (user) {
        navigate('/home');
    }


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)

    }

    const navigateRegister = () => {
        navigate('/register')
    }

    const resetPassword = () => {
        const email = emailRef.current.value;
        if (email) {
            sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast("Please Enter your E-mail Address")
        }

    }

    return (
        <div className='container w-50 mt-3 mx-auto'>
            <h2 className='text-primary text-center'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='d-flex justify-content-start' variant="primary" type="submit">
                    Login
                </Button>
                {errorElement}

                <p className='mt-3 text-start'><span onClick={resetPassword} style={{ cursor: 'pointer' }} className='text-primary'>Forget Password?</span></p>

                <p className='mt-3 text-start'>New to Electro Store? <span onClick={navigateRegister} style={{ cursor: 'pointer' }} className='text-danger'>Please Register</span></p>
            </Form>



        </div>
    );
};

export default Login;