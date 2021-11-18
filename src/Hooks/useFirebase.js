import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, getIdToken, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [token, setToken] = useState('');
    const [admin, setAdmin] = useState(false);


    // login with email and password
    const logInUser = (email, password, location, navigate, toast) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    // register with email and password
        const registerUser = (email, password, name, navigate) => {
            setIsLoading(true);
            console.log("ENTERING CREATE USER")

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    setError('');
                    const newUser = { email, displayName: name };
                    setUser(newUser);
                    // save user to the database
                    saveUser(email, name, 'POST');
                    // send name to firebase after creation
                    updateProfile(auth.currentUser, {
                        displayName: name
                    }).then(() => {
                        toast.success("Registration successfully comploeted")
                    }).catch((error) => {
                        setError(error)
                    });
                    navigate('/');
                })
                .catch((error) => {
                    setError(error.message);
                    console.log(error);
                })
                .finally(() => setIsLoading(false));
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
                getIdToken(user)
                .then(idToken => setToken(idToken))
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;

    }, []);

// admin check function
    useEffect(() => {
        fetch(`https://mysterious-fjord-26460.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

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

   //save user to database
   const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('https://mysterious-fjord-26460.herokuapp.com/users', {
        method: method,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then()
}

    return {
        user,
        error,
        isLoading,
        logInUser,
        registerUser,
        signInUsingGoogle,
        logOut,
        setUser,
        setError,
        setIsLoading,
        saveUser,
        token,
        admin
    }

}

export default useFirebase;