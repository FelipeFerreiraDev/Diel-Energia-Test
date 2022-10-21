import { inject, injectable } from 'tsyringe'

import { ITasksRepository } from '@modules/tasks/repositories/ITasksRepository'
import { ICreateTaskDTO } from '@modules/tasks/dtos/ICreateTaskDTO'
import { Task } from '@modules/tasks/infra/typeorm/entities/Task'

@injectable()
class CreateTaskUseCase {
  constructor (
    @inject('TasksRepository')
    private readonly tasksRepositories: ITasksRepository
  ) {}

  async execute ({ title, description, date, runtime, user_id }: ICreateTaskDTO): Promise<Task> {
    const task = await this.tasksRepositories.create({
      title,
      description,
      date,
      runtime,
      user_id
    })

    return task
  }
}

export { CreateTaskUseCase }
