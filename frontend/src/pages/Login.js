import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        // Dummy validation
        if (username === "admin" && password === "admin") {
            // Redirect to Dashboard
            navigate('/dashboard');
        } else {
            alert('Invalid credentials');
        }   
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Doctor Login</h1>
            <form onSubmit={handleLogin} className="w-96">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="p-2 border border-gray-300 w-full mb-4"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="p-2 border border-gray-300 w-full mb-4"
                />
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 w-full">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
