import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import initializeFirebase from "../firebase/firebase.init";




// CALL INITIALIZEFIREBASE
initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);


    const auth = getAuth();

    // USER REGISTERD
    const registerUser = (email, password, name, history) => {
        setIsloading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, 'POST')

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsloading(false));
    };

    // STATE CHANGED
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsloading(false);
        });
    }, []);

    const saveUser = (email, displayName, method) => {
        const users = { email, displayName };

        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then()
    };

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.displayName}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.admin)
                setAdmin(data.admin)
            })
    }, [user.displayName])

    // USER LOGIN
    const loginUser = (email, password, location, history) => {
        setIsloading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsloading(false));
    }


    // LOG OUT
    const logOut = () => {
        setIsloading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsloading(false));
    }

    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        logOut,
        loginUser,
    }
}


export default useFirebase;