// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate =new  useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8001/auth/login',{
              method:"POST",
              headers:{
                'Content-Type':'application/json',
              },
              body:JSON.stringify({email,password}),
              credentials:'include',
            });
            // setUser({ token: response.data.token, role: response.data.role });
            // localStorage.setItem('user', JSON.stringify(response.data));

            // Redirect based on user role
            const data=response.json()
            console.log(data)
            navigate('/')
            // if (data.role === 'farmer') {
            //     navigate('/farmer');
            // } else if (data.role === 'tourist') {
            //     navigate('/tourist');
            // } else if (data.role === 'admin') {
            //     navigate('/admin');
            // }
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div className=" mt-10 flex items-center justify-center w-full ">
            <div className="bg-white  shadow-md rounded-lg px-8 py-6 max-w-md">
                <h1 className="text-2xl font-bold text-center mb-4 ">Login!</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700  mb-2">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Corrected here
                            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 "
                            placeholder="your@email.com"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700  mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Corrected here
                            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 "
                            placeholder="Enter your password"
                            required
                        />
                        <Link to={'/forgetpass'}
                            className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot Password?</Link>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        
                        <Link to="/register" className='text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Create account</Link>
                    </div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
