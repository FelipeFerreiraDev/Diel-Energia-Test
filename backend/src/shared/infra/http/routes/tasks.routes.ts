import { CreateTaskController } from '@modules/tasks/useCases/createTask/CreateTaskController'
import { DeleteTaskByIdController } from '@modules/tasks/useCases/deleteTaskById/DeleteTaskByIdController'
import { ListTaskByIdController } from '@modules/tasks/useCases/listTasksById/ListTaskByIdController'
import { ListTaskByTitleController } from '@modules/tasks/useCases/listTasksByTitle/ListTaskByTitleController'
import { ListTaskByUserController } from '@modules/tasks/useCases/listTasksByUser/ListTaskByUserController'
import { UpdateTaskController } from '@modules/tasks/useCases/updateTask/UpdateTaskController'
import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const taskRoutes = Router()

const createTaskController = new CreateTaskController()
const listTaskByUserController = new ListTaskByUserController()
const deleteTaskByIdController = new DeleteTaskByIdController()
const updateTaskController = new UpdateTaskController()
const listTaskByTitleController = new ListTaskByTitleController()
const listTaskByIdController = new ListTaskByIdController()

taskRoutes.post('/', ensureAuthenticated, createTaskController.handle)
taskRoutes.get('/', ensureAuthenticated, listTaskByUserController.handle)
taskRoutes.delete('/:task_id', ensureAuthenticated, deleteTaskByIdController.handle)
taskRoutes.put('/:task_id', ensureAuthenticated, updateTaskController.handle)
taskRoutes.post('/title', ensureAuthenticated, listTaskByTitleController.handle)
taskRoutes.get('/:task_id', ensureAuthenticated, listTaskByIdController.handle)

export { taskRoutes }
