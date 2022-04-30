import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    
    const navigate = useNavigate();
    
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    let errorElement;
    if(googleError){
        errorElement = <p className='text-danger'>Error: {googleError?.message}</p>
    }

    if(googleLoading){
        return <Loading></Loading>
    }

    if(googleUser) {
        navigate('/home');    
    }
    return (
        <div>

            <div className='row'>
                <div className='col'><hr></hr></div>
                <div className='col-auto'>
                    <p>or</p>
                </div>
                <div className='col'><hr></hr></div>
            </div>

            {errorElement}

            <button
            className='App btn btn-primary w-50 d-block my-3 mx-auto'
            onClick={() => signInWithGoogle()}
            >
                <img src="https://i.ibb.co/z6MCFt2/google.png" alt="" />
                <span className='px-2'>Google Sign In</span>
            </button>
            
        </div>
    );
};

export default SocialLogin;