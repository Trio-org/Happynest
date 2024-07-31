import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";

const VerifyOtp = () => {
  const navigate = new useNavigate();
  const [otp, setOTP] = useState("");
  const location = useLocation();
  const { state } = location;
  const phoneNumber = state.phoneNumber;
  console.log(phoneNumber);
  const handlesendotp = async (e) => {
    e.preventDefault();
    try {
      console.log("workinng");
      const res = await fetch("http://localhost:8001/auth/request-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      });
      const data = await res.json();
      if(data){      toast.success("otp sent successfully");
      }
    } catch (err) {
      toast.error(err.msg);
    }
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(phoneNumber);
      const res = await fetch("http://localhost:8001/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber, otp }),
      });
      const data = await res.json();
      if (data.message === "success") {
        navigate('/resetpass',{
            state:{
                phone:phoneNumber,
            }
        })
        return
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(data.message);
    }
  };
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
      <Toaster position="top-right" richColors />
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>OTP Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>Code has been sent to {phoneNumber}</p>
            </div>
          </div>

          <div>
            <form onSubmit={handlesubmit}>
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  <div className="w-full h-16">
                    <input
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      maxLength={"4"}
                      onChange={(e) => setOTP(e.target.value)}
                      value={otp}
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-5">
                  <div>
                    <button
                      type="submit"
                      className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 text-white text-sm shadow-sm"
                    >
                      Verify Account
                    </button>
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't receive code?</p>
                    <button
                      type="button"
                      onClick={handlesendotp}
                      className="flex flex-row items-center text-blue-600"
                      href="#"
                      rel="noopener noreferrer"
                    >
                      Resend
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
