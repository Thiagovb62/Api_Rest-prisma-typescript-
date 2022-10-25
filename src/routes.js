import { Router } from 'express'
import UserController from './controller/UserController'
const routes = Router()

routes.get('/', (req, res) => {
  res.json({ conectado: 'conectado' })
})
routes.post('/user', UserController.create)

export default routes
