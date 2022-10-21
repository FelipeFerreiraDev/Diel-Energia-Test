import { CreateTaskController } from '@modules/tasks/useCases/createTask/CreateTaskController'
import { DeleteTaskByIdController } from '@modules/tasks/useCases/deleteTaskById/DeleteTaskByIdController'
import { ListTaskByUserController } from '@modules/tasks/useCases/listTasksByUser/ListTaskByUserController'
import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const taskRoutes = Router()

const createTaskController = new CreateTaskController()
const listTaskByUserController = new ListTaskByUserController()
const deleteTaskByIdController = new DeleteTaskByIdController()

taskRoutes.post('/', ensureAuthenticated, createTaskController.handle)
taskRoutes.get('/', ensureAuthenticated, listTaskByUserController.handle)
taskRoutes.delete('/:task_id', ensureAuthenticated, deleteTaskByIdController.handle)

export { taskRoutes }
