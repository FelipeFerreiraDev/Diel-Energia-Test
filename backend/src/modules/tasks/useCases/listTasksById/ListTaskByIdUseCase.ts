import { Task } from '@modules/tasks/infra/typeorm/entities/Task'
import { ITasksRepository } from '@modules/tasks/repositories/ITasksRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
class ListTaskByIdUseCase {
  constructor (
    @inject('TasksRepository')
    private readonly tasksRepositories: ITasksRepository
  ) {}

  async execute (task_id: string): Promise<Task> {
    const task = await this.tasksRepositories.findById(
      task_id
    )

    return task
  }
}

export { ListTaskByIdUseCase }
