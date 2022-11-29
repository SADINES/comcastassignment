import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import './logincomponent.css';

const Login = ()=>{
   const {loginWithRedirect} = useAuth0();
    return (
        <div className={'logincontainer'}>
        <button className='buttoncontainer' onClick={()=>{loginWithRedirect()}}>Login</button>
        </div>
    )
}

export default Login;