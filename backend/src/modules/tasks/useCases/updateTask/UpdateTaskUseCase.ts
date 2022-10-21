import { inject, injectable } from 'tsyringe'

import { ITasksRepository } from '@modules/tasks/repositories/ITasksRepository'
import { Task } from '@modules/tasks/infra/typeorm/entities/Task'
import { IUpdateTaskDTO } from '@modules/tasks/dtos/IUpdatedTaskDTO'

@injectable()
class UpdateTaskUseCase {
  constructor (
    @inject('TasksRepository')
    private readonly tasksRepositories: ITasksRepository
  ) {}

  async execute ({ title, description, date, runtime, task_id }: IUpdateTaskDTO): Promise<Task> {
    const task = await this.tasksRepositories.updateById({
      task_id,
      title,
      description,
      date,
      runtime
    })

    return task
  }
}

export { UpdateTaskUseCase }
