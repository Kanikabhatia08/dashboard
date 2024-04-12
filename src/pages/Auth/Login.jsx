import React, { useState } from 'react'
import login from '../../data/login.png'
import { Link, Navigate} from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../Firebase/auth';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)    
    const [errorMessage, setErrorMessage] = useState('')
    const { userLoggedIn } = useAuth()
    console.log(userLoggedIn,"authhhhhhh")
    
    const onSubmit = async (e) => {
        e.preventDefault()
        try{
            if(!isSigningIn) {
                setIsSigningIn(true)
                await doSignInWithEmailAndPassword(email, password)
            }
        }
        catch(error){
            setErrorMessage(error.message)
        }
    }

    const onGoogleSignIn = (e) => {
        e.preventDefault()
        try{
            if (!isSigningIn) {
                setIsSigningIn(true)
                doSignInWithGoogle().catch(err => {
                    setIsSigningIn(false)
                })
            }
        }
        catch(error){
            setErrorMessage(error.message)
            setIsSigningIn(false)
        }
    }

return (
    <div>
        {userLoggedIn && (<Navigate to={'/'} replace={true} />)}

    <div className='w-[90%] mx-auto justify-center flex gap-8 '>

        <div>
            <img src={login} alt='login' loading='lazy' />
        </div>
        <div className='flex flex-col gap-2 w-[40%]'>
            <h2 className='text-3xl font-bold dark:text-white'>Welcome to Shoppy</h2>
            <p className='text-sm text-gray-600 dark:text-gray-300'>New to Shoppy? <span className='font-semibold text-cyan-500 hover:cursor-pointer'><Link to="/register">Create an Account</Link></span></p>

            <form className='flex flex-col my-3 gap-2' onSubmit={onSubmit}>
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
                </button>

                {errorMessage && (
                    <span className='text-red-600 font-bold'>{errorMessage}</span>
                )}


                <div className='flex flex-row text-center w-full'>
                    <div className='border-b-2 border-gray-300 mb-2.5 mr-2 w-full'></div><div className='text-sm font-bold w-fit dark:text-gray-300'>OR</div><div className='border-b-2 border-gray-300 mb-2.5 ml-2 w-full'></div>
                </div>

                <div>
                <button
                        disabled={isSigningIn}
                        onClick={(e) => { onGoogleSignIn(e) }}
                        className={`w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-white text-sm font-medium   ${isSigningIn ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 transition duration-300 '}`}>
                        <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_17_40)">
                                <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                                <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                                <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                                <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                            </g>
                            <defs>
                                <clipPath id="clip0_17_40">
                                    <rect width="48" height="48" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        {isSigningIn ? 'Signing In...' : 'Continue with Google'}
                    </button>
                </div>
            </form>

        </div>
    </div>
    </div>
    
  )
}

export default Login