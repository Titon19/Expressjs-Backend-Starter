import { Router } from "express"
import { register } from "../controllers/userController"
import { validationRequest } from "../middlewares/validationRequest"
import { userValidation } from "../validations/userValidations"
const userRoutes = Router()

userRoutes.post("/register", validationRequest(userValidation), register)

export default userRoutes
