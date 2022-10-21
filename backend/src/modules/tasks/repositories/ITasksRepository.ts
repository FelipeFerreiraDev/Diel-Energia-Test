import { ICreateTaskDTO } from '../dtos/ICreateTaskDTO'
import { IUpdateTaskDTO } from '../dtos/IUpdatedTaskDTO'
import { Task } from '../infra/typeorm/entities/Task'

interface ITasksRepository {
  create: (data: ICreateTaskDTO) => Promise<Task>
  findTaskById: (task_id: string) => Promise<Task>
  findByUser: (user_id: string) => Promise<Task[]>
  updateById: (task: IUpdateTaskDTO) => Promise<Task>
  deleteById: (task_id: string) => Promise<void>
}

export { ITasksRepository }
