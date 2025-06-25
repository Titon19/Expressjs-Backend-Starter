import { NextFunction, Request, Response } from "express"
import { logger } from "../utils/logger"

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    logger.info("Register User")
  } catch (error) {
    logger.error(error)
  }
}
