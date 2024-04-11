import React, { useState } from 'react'
import login from '../../data/login.png'
import { jwtDecode } from 'jwt-decode'
import { GoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../../contexts/ContextProvider';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)    
    const navigate = useNavigate()
    const {setUserObject,setActiveMenu} = useStateContext();
    
    const submitHandler =(e) =>{
        e.preventDefault();
        if(email.length === 0 ){
            toast.error("Enter Email")

        }
        if(password.length === 0 ){
            toast.error("Enter Password")
        }
        else{
            setIsSigningIn(true);
            navigate("/ecommerce");
            setActiveMenu(true);
            localStorage.setItem('userLoggedIn', JSON.stringify('true'));
            console.log(isSigningIn, "signin?")
        }
    }

return (
    <div className='w-[90%] mx-auto justify-center flex gap-8 '>
        <div>
            <img src={login} alt='login' loading='lazy' />
        </div>
        <div className='flex flex-col gap-2 w-[40%]'>
            <h2 className='text-3xl font-bold dark:text-white'>Welcome to Shoppy</h2>
            <p className='text-sm text-gray-600 dark:text-gray-300'>New to Shoppy? <span className='font-semibold text-cyan-500 hover:cursor-pointer'><Link to="/register">Create an Account</Link></span></p>

            <form className='flex flex-col my-3 gap-2' onSubmit={submitHandler}>
                <label className='text-sm dark:text-white'>Email Address</label>
                <input 
                    type="email"
                    autoComplete='email'
                    value={email} onChange={(e) => { setEmail(e.target.value) }}
                    className='h-14 px-2 mb-2 rounded-md border-gray-400 border-1 outline-cyan-400'
                />

                <label className='text-sm dark:text-white'>Password</label>
                <input 
                    type="password"
                    autoComplete='current-password'
                    value={password} onChange={(e) => { setPassword(e.target.value) }}
                    className=' h-14 px-2 mb-2 rounded-md border-gray-400 border-1 outline-cyan-400'
                />

                <div className='flex justify-between dark:text-white'>
                    <div>
                        <input type='checkbox' name='remember' className='h-4 w-4'/>
                        <label htmlFor='remember'> Remember This Device</label>
                    </div>
        
                    <p className='font-semibold text-cyan-500 hover:cursor-pointer'>Forgot Password ?</p>
                </div>

                <button
                        type="submit"
                        disabled={isSigningIn}
                        className={`w-full px-4 py-2 my-2 text-white font-medium rounded-lg ${isSigningIn ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
                    >
                        {isSigningIn ? 'Signing In...' : 'Sign In'}
                        <Toaster />
                </button>

                <div className='flex flex-row text-center w-full'>
                    <div className='border-b-2 border-gray-300 mb-2.5 mr-2 w-full'></div><div className='text-sm font-bold w-fit dark:text-gray-300'>OR</div><div className='border-b-2 border-gray-300 mb-2.5 ml-2 w-full'></div>
                </div>

                <div>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        // console.log("login Successful")
                        // console.log(credentialResponse);
                        setIsSigningIn(true);
                        navigate("/ecommerce");
                        setActiveMenu(true);
                        var user = jwtDecode(credentialResponse.credential)
                        setUserObject(user);
                    }
                }

                    onError={() => {
                        console.log('Login Failed');
                    }
                }   
                />
                </div>
            </form>

        </div>
    </div>
  )
}

export default Login