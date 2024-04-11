import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { GoogleLogin } from '@react-oauth/google';
import login from '../../data/login.png'
import { useStateContext } from '../../contexts/ContextProvider';
import toast from 'react-hot-toast';


const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const {currentcolor, setUserObject} = useStateContext();

    const navigate = useNavigate()
    
    const onSubmit = async(e) =>{
        e.preventDefault();
        if(email.length === 0 ){
            toast.error("Enter Email")

        }
        if(password.length === 0 ){
            toast.error("Enter Password")
        }
        else{
            setIsRegistering(true)
            localStorage.setItem('userLoggedIn', JSON.stringify(isRegistering));
        }

    }
return (
    <div className='w-[90%] mx-auto justify-center flex gap-8 '>
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

                <div className='flex flex-row text-center w-full'>
                    <div className='border-b-2 border-gray-300 mb-2.5 mr-2 w-full'></div><div className='text-sm dark:text-gray-300 font-bold w-fit'>OR</div><div className='border-b-2 border-gray-300 mb-2.5 ml-2 w-full'></div>
                </div>

                <div  className=" py-2">
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log("login Successful")
                        console.log(credentialResponse);
                        setIsRegistering(true);
                        navigate("/ecommerce");
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
    </div>  )
}

export default Register