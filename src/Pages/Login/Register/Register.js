import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { updateProfile } from 'firebase/auth';


const Register = () => {
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    if (user) {
        navigate('/home');
    }


    const handleRegister = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName:name});
        console.log(updateProfile)
        navigate('/home')




    }
    return (
        <div className='container w-50 mt-3 mx-auto'>
            <h2 className='text-primary text-center'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name='name' placeholder="Enter your name" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={() => setAgree(!agree)}
                        className={`mt-1 text-start ${agree ? 'text-primary' : 'text-danger'} `}
                        type="checkbox"
                        name='terms'
                        id='terms'
                        label="Accept Electro Store Terms and Conditions" />
                </Form.Group>
                <Button
                    className='d-flex jutify-content-start'
                    disabled={!agree}
                    variant="primary"
                    type="submit">
                    Register
                </Button>
                <p className='text-start mt-3'>Already have an account? <span style={{ cursor: 'pointer' }} onClick={navigateLogin} className='text-danger'>Please Login</span></p>
            </Form>
        </div>
    );
};

export default Register;