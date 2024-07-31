import express from 'express'
import { registercontrol,logincontrol } from '../controllers/auth.control.js '
import {  forgetpass, getrole, passreset, verifyotp} from '../controllers/auth.control.js'
const router=express.Router()

router.post('/register',registercontrol)
router.post('/login',logincontrol)
router.post('/request-otp',forgetpass)
router.get('/getrole',getrole)
// router.post('/request-otp',)
router.post('/verify-otp',verifyotp)
router.post('/resetpass',passreset)
// router.post('/verifyotp',verifyotp)
export default router