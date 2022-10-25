import { Router } from 'express'
import UserController from './controller/UserController'
const routes = Router()

routes.get('/users/:id', UserController.showById)
routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
routes.put('/users/update/:id', UserController.update)

export default routes