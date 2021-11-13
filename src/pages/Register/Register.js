import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
// import background from '../../Images/backgrounds/19420.jpg'
import './Register.css'

const Register = () => {
    const { signInUsingGoogle, handleInput, registerUser, logInUser, error, setError } = useAuth();

    const location = useLocation()
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || '/';
    console.log(redirect_uri);

    ///google sign-in
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            console.log("hello then")
            setError('');
            navigate(redirect_uri)  
        })

    }

    // email password sing in
const handleRegisteUser =async () => {
    await registerUser()
    navigate('/')
}


    return (
        <div id="login" className=" min-h-[100vh] w-full" >
            <h1>
                Create new account
            </h1>

{/* <!-- Root element for center items --> */}
<section className="min-h-screen flex flex-col">
            <div className="flex flex-1 items-center justify-center">
                <div className="rounded-lg px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                    <form onSubmit={handleRegisteUser} className="text-center">
                        <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                            Sign Up
                        </h1>
                        <div className="py-2 text-left">
                            <input onBlur={handleInput} type="text" name="name" className="border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-clr-secondary "  placeholder="Name" />
                        </div>
                        <div className="py-2 text-left">
                            <input onBlur={handleInput} type="email" name="email" className="border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-clr-secondary " placeholder="Email" />
                        </div>
                        <div className="py-2 text-left">
                            <input onBlur={handleInput} type="password" name="password" className="border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-clr-secondary " placeholder="Password" />
                        </div>
                        <div className="py-2 text-left">
                            <input onBlur={handleInput} type="password" name="password2" className="border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-clr-secondary " placeholder="Re-type password" />
                        </div>
                        <div className="py-2">
                            <button type="submit" className="border-2 border-gray-100 focus:outline-none bg-clr-primary text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-clr-secondary">
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        <Link to="/" className="hover:underline">Forgot password?</Link>
                    </div>
                    <h1 className="text-gray-400 my-2">----------or----------</h1>
                    <button className="rounded px-2 py-3 border-2 border-clr-primary hover:ring-2 ring-clr-secondary flex mx-auto " onClick={handleGoogleSignIn}><span className="inline-block text-red-300"><img className="w-5 h-5" src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt=""/></span><span className="my-auto ml-2">Sign in with Google</span></button>
                    <div className="text-center mt-12">
                        <span>
                            Don't have an account?
                        </span>
                        <Link to="/" className="text-md text-clr-secondary underline font-semibold hover:text-indigo-800">Create One</Link>
                    </div>
                </div>
            </div>
        </section>
           
        </div>
    );
};

export default Register;