import express from "express";
import { authenticateUser,getProfileByID } from "./controller.js";
const router = express.Router()

router.post('/',authenticateUser)

router.post('/userbyid',getProfileByID)

export default router