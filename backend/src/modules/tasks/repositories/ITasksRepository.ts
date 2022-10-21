import { ICreateTaskDTO } from '../dtos/ICreateTaskDTO'
import { Task } from '../infra/typeorm/entities/Task'

interface ITasksRepository {
  create: (data: ICreateTaskDTO) => Promise<Task>
  findTaskById: (task_id: string) => Promise<Task>
  findByUser: (user_id: string) => Promise<Task[]>
}

export { ITasksRepository }
