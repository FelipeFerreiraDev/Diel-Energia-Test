import { ICreateTaskDTO } from '@modules/tasks/dtos/ICreateTaskDTO'
import { ITasksRepository } from '@modules/tasks/repositories/ITasksRepository'
import { getRepository, Repository } from 'typeorm'

import { Task } from '../entities/Task'

class TasksRepository implements ITasksRepository {
  private readonly repository: Repository<Task>

  constructor () {
    this.repository = getRepository(Task)
  }

  async create ({ title, description, date, runtime, user_id }: ICreateTaskDTO): Promise<Task> {
    const task = this.repository.create({
      title,
      description,
      date,
      runtime,
      user_id
    })

    await this.repository.save(task)

    return task
  }

  async findTaskById (task_id: string): Promise<Task> {
    const task = await this.repository.findOne(task_id)

    return task
  }

  async findByUser (user_id: string): Promise<Task[]> {
    const task = await this.repository.find({
      where: { user_id }
    })

    return task
  }
}

export { TasksRepository }
