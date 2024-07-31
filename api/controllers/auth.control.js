import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import Otp from "../models/otp.model.js";
import twilio from 'twilio';

const accountSid = 'ACed82447841c8106cb24cf196abdcaa61';
const authToken = '7ff3ca3e41b2d5445c72a5c931d69fab';
const client = new twilio(accountSid, authToken);
dotenv.config();
export const registercontrol = async (req, res, next) => {
  const { username, password, role, email, phone,agreement } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  // const refreshTokenSecret = process.env.ACCESS_SECRET;
  const accessTokenSecret = process.env.ACCESS_SECRET;
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Only set this in production
    sameSite: "Strict",
  };
  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    let invaliduser = await User.findOne({ username });
    if (invaliduser) {
      return res.status(400).json({ msg: "User already exists" });
    }
    let duplicatenum=await User.findOne({phone})
    if(duplicatenum){
      return res.status(400).json({msg:"phone number already exist"})
    }

    // Create new user
    user = new User({ username, password: hashedPassword, role, email, phone,agreement });

    // Hash password
    // const salt = await bcrypt.genSalt(10);
    // user.password = await bcrypt.hash(password, salt);

    // Save user to the database
    await user.save();

    // Create access and refresh tokens
    // const payload = {  };
    const { password: pass, ...rest } = user._doc;
    const accessToken = jwt.sign({ id: user._id }, accessTokenSecret);
    // const refreshToken = jwt.sign(payload, refreshTokenSecret, { expiresIn: '7d' });

    // Save refresh token in the database
    // user.refreshToken = refreshToken;
    console.log(accessToken)

    await user.save();
    res.cookie("accessToken", accessToken, {httpOnly:true}).status(200).json(rest);
    // res.cookie('refreshToken', refreshToken, { ...cookieOptions, maxAge: 7 * 24 * 60 * 60 * 1000 });

    // Send tokens to the client
    // res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
};

export const logincontrol = async (req, res, next) => {
  const { email, password } = req.body;
  const accessTokenSecret = process.env.ACCESS_SECRET;
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Only set this in production
    sameSite: "Strict",
  };
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    const { password: pass, ...rest } = user._doc;

    const accessToken = jwt.sign({ id: user._id }, accessTokenSecret);
    // const refreshToken = jwt.sign(payload, refreshTokenSecret, { expiresIn: '7d' });

    // user.refreshToken = refreshToken;
    await user.save();

    res
      .cookie("accessToken", accessToken, cookieOptions)
      .status(200)
      .json(rest);
    // res.cookie('refreshToken', refreshToken, { ...cookieOptions, maxAge: 7 * 24 * 60 * 60 * 1000 });

    // res.status(200).json({ msg: 'User logged in successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
export const forgetpass = async (req, res, next) => {
  try {
    const { phoneNumber } = req.body;
    // console.log(phone);
    const validuser = await User.find({ phone: phoneNumber });
    console.log(validuser);
    if (!validuser) return res.status(400).json({ msg: "user not exist" });
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    
        // Check if OTP already exists for the phone number
        const existingOtp = await Otp.findOne({ phoneNumber });
        if (existingOtp) {
            existingOtp.otp = otp; // Update OTP if it exists
            await existingOtp.save();
        } else {
            // Create a new OTP entry
            await Otp.create({ phoneNumber, otp });
        }

        // Send OTP via Twilio
        await client.messages.create({
            body: `Your OTP code is ${otp}`,
            from: '+12085866251',
            to: `+91${phoneNumber}`
        });

        res.status(200).json({msg:"success"});
    } catch (error) {
      res.status(500).json({msg:'Failed to send OTP'});
    }
 
 };
export const verifyotp=async(req,res)=>{
  const { phoneNumber, otp } = req.body;

    try {
        const otpEntry = await Otp.findOne({ phoneNumber });
        if (!otpEntry) {
            return res.status(400).json({ message: 'No OTP found for this phone number' });
        }

        if (otpEntry.otp === otp) {
            // OTP verified successfully
            await Otp.deleteOne({ phoneNumber }); // Optionally delete the OTP after verification
            res.status(200).json({ message: 'success' });
        } else {
            res.status(400).json({ message: 'Invalid OTP' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error verifying OTP', error });
    }

}

// export const verifyotp=async(req,res,next)=>{
    
//     try{const {user_otp}=req.body
//     (user_otp === otp)?res.send("saavu").status(200):res.status(300).send("oombu")
//     }catch(err){
//         console.log(err.message)
//     }
// }

export const getrole = async (req, res) => {
  try {
    const token = req.cookies.accessToken;
    console.log(token)
    if (!token) return res.status(401).json("unauthorized");

    jwt.verify(token, process.env.ACCESS_SECRET, async (err, user) => {
      if (err) return res.status(300).json({ msg: "Unauthorized" });
      else {
        const validuser = await User.findById(user.id);
        res.json(validuser.role).status(200);
      }
      // next()
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const passreset=async(req,res)=>{
  try {
    const {phone,password}=req.body
    const hashedPassword = bcrypt.hashSync(password, 10);

    const result=await User.findOneAndUpdate({phone},{password:hashedPassword})
    const { password: pass, ...rest } = result._doc;

    res.status(200).json(rest)
  } catch (err) {
    console.log(err.message)
  }
}