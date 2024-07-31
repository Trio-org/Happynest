import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster,toast } from 'sonner';

const Forgetpass = () => {
    const navigate=new useNavigate()
    const [phone, setPhone] = useState('');
    const handlesendotp=async(e)=>{
        e.preventDefault()
        try {
            console.log("workinng")
            const res=await fetch('http://localhost:8001/auth/request-otp',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({phoneNumber:phone})})
            // console.log(res)
            const data=await res.json()
            // console.log(data)
            // if(res.status===200){
            //     navigate('/verifyotp')
            //     return
            // }
            // else{
            //     console.log(data.message)
            // }
            if(data.msg==='success'){
                navigate('/verifyotp',{
                    state:{
                        phoneNumber:phone
                    }
                })
            }
            else{
                toast.error(data.msg)
            }
        } catch (err) {
            toast.error(err.msg)
        }
    }
    // const handleRequestOTP = async () => {
    //     try {
    //       await axios.post('http://localhost:8001/request-otp', { phoneNumber });
    //       navigate('/verifyotp')
    //     //   setMessage('OTP sent successfully');
    //     } catch (error) {
    //     //   setMessage('Failed to send OTP');
    //       console.error(error);
    //     }
    //   };
    return (
        <div className="min-h-screen flex items-center justify-center w-full">
            <Toaster position='top-right' richColors/>
            <div className=" shadow-md rounded-lg bg-white px-8 py-6 max-w-md">
                <h1 className="text-2xl font-bold text-center mb-4 ">Forgot password ?!</h1>
                <h1 className=" text-sm font-bold text-center mb-4 ">No worries ! we'll send you reset instructions.</h1>
                <form onSubmit={handlesendotp}>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700  mb-2">Phone</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)} 
                            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="enter your phone"
                            required
                        />
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                    </div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 ">Reset Password</button>
                    <Link to="/login" className='text-xs text-indigo-500 hover:text-indigo-700  '>back to Login</Link>
                </form>
            </div>
        </div>
    );
};

export default Forgetpass;