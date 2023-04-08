import express from "express";
import { authenticateUser } from "./controller.js";
const router = express.Router()

router.post('/',authenticateUser)


export default router