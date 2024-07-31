import mongoose, { get } from "mongoose";
const otpSchema = new mongoose.Schema({
    phoneNumber: { type: String, required: true, unique: true },
    otp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: '30s' } // OTP expires in 30 seconds
  });
const Otp=mongoose.model('Otp',otpSchema)
export default Otp