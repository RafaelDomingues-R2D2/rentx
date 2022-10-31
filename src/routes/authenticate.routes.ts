import { Router } from 'express'
import { AuthencticateUserController } from '../modules/accounts/useCases/authenticateUser/AuthenticateUserController'

const authenticateRoutes = Router()

const authenticateUserController = new AuthencticateUserController()

authenticateRoutes.post('/sessions', authenticateUserController.handle)

export { authenticateRoutes }