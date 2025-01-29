import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
} from 'react-simple-captcha';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const Login = () => {
    const { user,signIn, googleVerify } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [captchaError, setCaptchaError] = useState('');
    const [disabled, setDisabled] = useState(true);
    const captchaRef = useRef(null);
    let location = useLocation();
    let navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        loadCaptchaEnginge(6); // Initialize captcha with 6 characters
    }, []);

    const handleLogin = async (e) => {
        const senduserInfo = {
             email:email,
             name:user?.displayName,
             password:password
        }
        e.preventDefault();
        setError('');

        try {
            await signIn(email, password);
            alert('Login successful!');
            axios.post('http://localhost:5000/users',senduserInfo)
            .then(res =>
            {
                Swal.fire({
                    title: "User Added to Database",
                    icon: "success",
                    draggable: true
                  });
            }
            )
            navigate(from, {replace:true});
        } catch (err) {
            setError(err.message || 'Failed to login.');
        }
    };

    const handleGoogleLogin = async () => {
        const senduserInfo = {
            email:email,
            
            password:password
       }

        try {
            await googleVerify()
            .then(result=>
            {
                 const userInfo = {
                    email:result.user?.email,
                    name:result.user?.displayName
                 }
                 axios.post('http://localhost:5000/users',userInfo)
            .then(res =>
            {
                Swal.fire({
                    title: "User Added to Database",
                    icon: "success",
                    draggable: true
                  });
            }
            )
              
            alert('Google sign-in successful!');
            navigate(from, {replace:true});
            }
            )
            
            
        } catch (err) {
            setError(err.message || 'Google sign-in failed.');
        }
    };

    const handleValidateCaptcha = () => {
        const value = captchaRef.current.value;
        if (validateCaptcha(value)) {
            setDisabled(false); // Enable the button if the captcha is valid
            setCaptchaError(''); // Clear any previous error
        } else {
            setDisabled(true); // Disable the button if the captcha is invalid
            setCaptchaError('Invalid captcha. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div>
                        <LoadCanvasTemplate />
                        <input
                            type="text"
                            ref={captchaRef}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter the captcha"
                        />
                        <button
                            type="button"
                            onClick={handleValidateCaptcha}
                            className="mt-2 btn btn-outline btn-xs"
                        >
                            Validate
                        </button>
                        {captchaError && <p className="text-red-500 text-sm mt-2">{captchaError}</p>}
                    </div>
                    <button
                        type="submit"
                        disabled={disabled}
                        className={`w-full py-2 px-4 rounded-lg transition duration-200 ${
                            disabled
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}
                    >
                        Login
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                    >
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
