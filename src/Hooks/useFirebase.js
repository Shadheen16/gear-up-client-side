import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInput = (e) => {
        e.preventDefault();
        if (e.target.name === "name") {
            console.log(e.target.value);
            setName(e.target.value);
        } else if (e.target.name === "email") {
            console.log(e.target.value);
            setEmail(e.target.value);
        } else if (e.target.name === "password") {
            console.log(e.target.value);
            setPassword(e.target.value);
        }
    };

    const logInUser = (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log("starting login with-" + email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('hi' + user);
                setUser(user);
                setError('');
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => {
                setIsLoading(false)
            });

    };

    const registerUser = (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(email, password);

        // email validation
        validateEmail();

        // password validation
        validatePassword();

        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                const user = res.user;
                setError('');
                updateName();
                setUser(user);
            }
            )
            .catch(error => setError(error.meassage))
            .finally(() => setIsLoading(false));
    }

    const updateName = () => {
        console.log(name);
        console.log(auth.currentUser + "from updateNmame");
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then((res) => {
                console.log("profile updated successfully")
                // ...
            }).catch((error) => {
               setError(error)
            });
    }




    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .catch(err => {
                console.log(err.message);
                setError(err.meassage);
            })
            .finally(() => {
                setIsLoading(false);
                console.log("isLoading is " + isLoading);

            });

    };

    //user state observer
    useEffect(() => {

        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside stateChange', user);
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;

    }, []);

    const logOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log("logout successfull");
                setUser({});
            }).catch((error) => {
                setError(error);
                console.log(error.message)
            })
            .finally(() => setIsLoading(false))
    };

    // EMAIL VALIDATION FUNCTION
    const validateEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(String(email).toLowerCase())) {
            setError("Inavaild email address");
            return;
        }
    };

    // PASSWORD VALIDATON FUNCTION
    const validatePassword = () => {
        if (password.length < 6) {
            setError("Your password must be at least 8 characters"); return;
        }
        if (password.length > 32) {
            setError("Your password must be at max 32 characters");
            return;
        }
        if (password.search(/[a-z]/) < 0) {
            setError("Your password must contain at least one lower case letter.");
            return;
        }
        if (password.search(/[A-Z]/) < 0) {
            setError("Your password must contain at least one upper case letter.");
            return;
        }

        if (password.search(/[0-9]/) < 0) {
            setError("Your password must contain at least one digit.");
            return;
        }
    }


    return {
        user,
        error,
        isLoading,
        logInUser,
        handleInput,
        registerUser,
        signInUsingGoogle,
        logOut,
        setUser,
        setError,
        setIsLoading
    }

}

export default useFirebase;