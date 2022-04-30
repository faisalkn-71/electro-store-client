import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    let errorElement;
    if(error){
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }

    if(loading){
        return <Loading></Loading>
    }



    const navigateLogin = () => {
        navigate('/login')
    }

    if (user) {
        navigate('/home');
    }


    const handleRegister = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


        createUserWithEmailAndPassword(email, password)
        




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

                    {errorElement}

                <Button
                    className='d-flex justify-content-start'
                    disabled={!agree}
                    variant="primary"
                    type="submit">
                    Register
                </Button>
                <p className='text-start mt-3'>Already have an account? <span style={{ cursor: 'pointer' }} onClick={navigateLogin} className='text-danger'>Please Login</span></p>
            </Form>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;