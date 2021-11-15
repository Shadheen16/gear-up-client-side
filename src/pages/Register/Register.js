import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Register.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { signInUsingGoogle, registerUser, saveUser, error, setError } = useAuth();

    const [registerData, setRegisterData ] = useState([])

    const location = useLocation()
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || '/';
    console.log(redirect_uri);

    ///google sign-in
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
    const newRegisterData = {...registerData};
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
    console.log(registerData)
}

const handleRegisteUser = (e) => {
    e.preventDefault();
    console.log('register user function')
    if (registerData.password !== registerData.password2) {
        
        toast.warning('Your password did not match');
        return
    }
    registerUser(registerData.email, registerData.password, registerData.name, navigate, toast);
}

// show error notifications
useEffect(()=>{
    if(error.length){
         toast.error(error)
    }
},[error])


    return (
        <div id="register" className=" min-h-[100vh] w-full" >

{/* <!-- Root element for center items --> */}
<section className="min-h-screen flex flex-col">
            <div className="flex flex-1 items-center justify-end">
                <div className="rounded-lg px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                    <form onSubmit={handleRegisteUser} className="text-center">
                        <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-clr-secondary">
                            Sign Up
                        </h1>
                        <div className="py-2 text-left">
                            <input onBlur={handleOnBlur} type="text" name="name" className="border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-clr-secondary "  placeholder="Name" />
                        </div>
                        <div className="py-2 text-left">
                            <input onBlur={handleOnBlur} type="email" name="email" className="border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-clr-secondary " placeholder="Email" />
                        </div>
                        <div className="py-2 text-left">
                            <input onBlur={handleOnBlur} type="password" name="password" className="border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-clr-secondary " placeholder="Password" />
                        </div>
                        <div className="py-2 text-left">
                            <input onBlur={handleOnBlur} type="password" name="password2" className="border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-clr-secondary " placeholder="Re-type password" />
                        </div>
                        <div className="py-2">
                            <button type="submit" className="border-2 border-clr-secondary focus:outline-none bg-clr-secondary hover:ring-4 ring-clr-secondary ring-opacity-30 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 :bg-clr-secondary">
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <h1 className="text-gray-500 my-2">----------or----------</h1>
                    <button className="rounded px-2 py-3 border-2 border-clr-primary hover:ring-2 ring-clr-secondary flex mx-auto " onClick={handleGoogleSignIn}><span className="inline-block text-red-300"><img className="w-5 h-5" src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt=""/></span><span className="my-auto ml-2">Sign in with Google</span></button>
                    <div className="text-center mt-12">
                        <span>
                            Already Registered?
                        </span>
                        <Link to="/login" className="text-md text-clr-secondary underline font-semibold hover:text-indigo-800">Please Login</Link>
                    </div>
                </div>
            </div>
        </section>
        <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={5000} />
        </div>
    );
};

export default Register;