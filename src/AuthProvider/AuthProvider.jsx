import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [visaId, setVisaId] = useState({});

    // Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign In
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Google verification
    const googleVerify = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    };

    // Sign out
    const signout = () => {
        return signOut(auth).then(() => {
            setUser(null);
            setLoading(false);
        });
    };

    
    const handelVisaDataUniqId = (id) => {
        setVisaId(id);
    };

    // Set Observer
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("current user", currentUser);
            setUser(currentUser);
            if(currentUser)
            {
                      const userInfo={email:currentUser.email};
                      axios.post('https://serverforfoodies.vercel.app/jwt',userInfo)
                      .then(res =>
                      {
                        console.log(res);
                         if(res.data.token)
                         {
                            localStorage.setItem('access-token',res.data.token)
                         }
                      }
                      )
            }
            else{
                //  TODO: If currentUser null then remove token
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        });
        return () => {
            unSubcribe();
        };
    }, []);
    const updateData = (updated) => {
        return updateProfile(auth.currentUser, updated);
    };
    // Send All Functions
    const authInfo = {
        createUser,
        user,
        loading,
        signout,
        signIn,
        googleVerify,
        handelVisaDataUniqId,
        visaId,
        updateData
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;
