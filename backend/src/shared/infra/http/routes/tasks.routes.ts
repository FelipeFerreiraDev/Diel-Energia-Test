import { CreateTaskController } from '@modules/tasks/useCases/createTask/CreateTaskController'
import { ListTaskByUserController } from '@modules/tasks/useCases/listTasksByUser/ListTaskByUserController'
import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const taskRoutes = Router()

const createTaskController = new CreateTaskController()
const listTaskByUserController = new ListTaskByUserController()

taskRoutes.post('/', ensureAuthenticated, createTaskController.handle)
taskRoutes.get('/', ensureAuthenticated, listTaskByUserController.handle)

export { taskRoutes }
