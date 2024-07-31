import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast,Toaster } from "sonner"; // Ensure you have imported the toast library correctly

const Resetpass = () => {
    const [password, setPassword] = useState('');
    const [confirmpass, setConfirmPass] = useState('');
    const navigate=new useNavigate()
    const location = useLocation();
    const { state } = location;
    const phone = state.phone;// Check if state and phone exist
    console.log(phone);
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form submission default behavior
        if (password !== confirmpass) {
            toast.error("Passwords do not match");
            return; // Prevent further execution if passwords don't match
        }

        try {
            const res = await fetch('http://localhost:8001/auth/resetpass', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ phone, password })
            });

            if (!res.ok) {
                throw new Error("Failed to reset password");
            }

            const data = await res.json();
            if(data){
                navigate('/login')
            }
            // console.log(data);

            // Handle success (e.g., navigate to another page or show success message)
        } catch (err) {
            console.error(err.message);
            toast.error("An error occurred while resetting the password");
        }
    }

    return (
        <div>
            <section className="bg-gray-50 text-black">
                <Toaster position="top-right" richColors/>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md sm:p-8">
                        <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Change Password
                        </h2>
                        <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="confirm-password"
                                    id="confirm-password"
                                    placeholder="••••••••"
                                    onChange={(e) => setConfirmPass(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-primary-700 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Reset Password
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resetpass