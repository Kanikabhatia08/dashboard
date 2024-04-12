import React, { useState } from 'react'
import { Link, Navigate} from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { GoogleLogin } from '@react-oauth/google';
import login from '../../data/login.png'
import { useStateContext } from '../../contexts/ContextProvider';
import toast from 'react-hot-toast';
import { doCreateUserWithEmailAndPassword } from '../../Firebase/auth';
import { useAuth } from '../../contexts/AuthContext';


const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const {currentcolor, setUserObject} = useStateContext();
    const [errorMessage, setErrorMessage] = useState('')

    const { userLoggedIn } = useAuth()
    
    const onSubmit = async (e) => {
        e.preventDefault()
        if(email.length == 0){
            setErrorMessage("Enter Email");
            setIsRegistering(false);
        }
        if(password.length == 0){
            setErrorMessage("Enter Password");
            setIsRegistering(false);
        }
        if(password.length < 6 || password.length > 20){
            setErrorMessage("Password should be between 6-20 characters");
            setIsRegistering(false);
        }

        try{
            if(!isRegistering) {
                setIsRegistering(true)
                await doCreateUserWithEmailAndPassword(email, password)
            }
        }
        catch(error){
            setErrorMessage(error.message)
            setIsRegistering(false)
        }
        
    }
return (
    <div className='w-[90%] mx-auto justify-center flex gap-8 '>
        {userLoggedIn && (<Navigate to={'/ecommerce'} replace={true} />)}

        <div>
            <img src={login} alt='login' loading='lazy' />
        </div>
        <div className='flex flex-col gap-2 w-[40%]'>
            <h2 className='text-3xl font-bold dark:text-white'>Welcome to Shoppy</h2>
            <p className='text-sm text-gray-600 dark:text-white'>Already have an Account? <span className='font-semibold text-cyan-500 hover:cursor-pointer'><Link to="/login">Sign In</Link></span></p>

            <form className='flex flex-col my-3 gap-2'>
            <label className='text-sm dark:text-white'>Name</label>
                <input 
                    type="name"
                    autoComplete='name'
                    value={name} onChange={(e) => { setName(e.target.value) }}
                    className='h-14 px-2 mb-2 rounded-md border-gray-400 border-1 outline-cyan-400'
                />
                <label className='text-sm dark:text-white '>Email Address</label>
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

                <button
                        type="submit"
                        disabled={isRegistering}
                        style={{background: currentcolor}}
                        onClick={onSubmit}
                        className={`w-full px-4 py-2 my-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg ${isRegistering ? 'bg-gray-300 cursor-not-allowed' : ' hover:shadow-xl transition duration-300'}`}
                    >
                        {isRegistering ? 'Registering In...' : 'Register'}
                </button>

               {errorMessage && (
                    <span className='text-red-600 font-bold'>{errorMessage}</span>
                )}
            </form>

        </div>
    </div>  )
}

export default Register