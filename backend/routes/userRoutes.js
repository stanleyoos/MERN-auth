import express from "express"
import { authUser, getUser } from "../controllers/userController.js"

const router = express.Router()

router.post("/auth", authUser)
router.get("/", getUser)

export default router
