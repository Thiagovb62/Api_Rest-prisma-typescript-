import { Router } from 'express'
import UserController from './controller/UserController'
import JobController from './controller/JobController'
const routes = Router()

routes.get('/users/:id', UserController.showById)
routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
routes.put('/users/update/:id', UserController.update)
routes.delete('/users/delete/:id', UserController.delete)

routes.get('/jobs', JobController.index)
routes.post('/users/jobs/:id', JobController.create)
routes.delete('/jobs/delete/:id', JobController.delete)

export default routes