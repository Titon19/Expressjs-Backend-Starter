import { Router } from "express"
import { register } from "../controllers/userController"
import { validationRequest } from "../middlewares/validationRequest"
import { userValidation } from "../validations/userValidations"
const userRoute = Router()

userRoute.post("/register", validationRequest(userValidation), register)

export default userRoute
