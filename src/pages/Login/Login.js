import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import { useEffect } from 'react';

const Register = () => {
    const { signInUsingGoogle, registerUser, saveUser, logInUser, error, setError } = useAuth();

    const [loginData, setLoginData ] = useState([])

    const location = useLocation()
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || '/';
    console.log(redirect_uri);

 //google sign-in
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            console.log("hello then")
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT');
            setError('');
            navigate(redirect_uri)  
        })

    }
// email password sing in
const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(loginData)
}

const handleLogInUser = e => {
    logInUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
}

//show error 
useEffect(() => {
    if(error.length){
        toast.error(error);
    }
},[error])


    return (
        <div id="login" className=" min-h-[100vh] w-full" >

{/* <!-- Root element for center items --> */}
<section className="min-h-screen flex flex-col">
            <div className="flex flex-1 items-center justify-end">
                <div className="rounded-lg px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                    <form onSubmit={handleLogInUser} className="text-center">
                        <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-clr-secondary">
                            Sign In
                        </h1>
                        <div className="py-2 text-left">
                            <input onBlur={handleOnBlur} type="email" name="email" className="border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-clr-secondary " placeholder="Email" />
                        </div>
                        <div className="py-2 text-left">
                            <input onBlur={handleOnBlur} type="password" name="password" className="border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-clr-secondary " placeholder="Password" />
                        </div>
                        <div className="py-2">
                            <button type="submit" className="border-2 border-clr-secondary focus:outline-none bg-clr-secondary hover:ring-4 ring-clr-secondary ring-opacity-30 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 :bg-clr-secondary">
                                Sign In
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        <Link to="/" className="hover:underline">Forgot password?</Link>
                    </div>
                    <h1 className="text-gray-500 my-2">----------or----------</h1>
                    <button className="rounded px-2 py-3 border-2 border-clr-primary hover:ring-2 ring-clr-secondary flex mx-auto " onClick={handleGoogleSignIn}><span className="inline-block text-red-300"><img className="w-5 h-5" src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt=""/></span><span className="my-auto ml-2">Sign in with Google</span></button>
                    <div className="text-center mt-12">
                        <span>
                            Do not have an account?
                        </span>
                        <Link to="/register" className="text-md text-clr-secondary underline font-semibold hover:text-indigo-800">Please Create One</Link>
                    </div>
                </div>
            </div>
        </section>
        <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={5000} />
        </div>
    );
};

export default Register;