import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hook/useToken';


const SocialLogin = () => {
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    
    const navigate = useNavigate();
    
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [token] = useToken(googleUser);

    let errorElement;
    if(googleError){
        errorElement = <p className='text-danger'>Error: {googleError?.message}</p>
    }

    if(googleLoading){
        return <Loading></Loading>
    }

    if(token) {
        navigate(from, { replace: true });   
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