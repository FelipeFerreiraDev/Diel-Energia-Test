import { inject, injectable } from 'tsyringe'

import { ITasksRepository } from '@modules/tasks/repositories/ITasksRepository'
import { AppError } from '@shared/errors/AppError'

@injectable()
class DeleteTaskUseCase {
  constructor (
    @inject('TasksRepository')
    private readonly tasksRepositories: ITasksRepository
  ) {}

  async execute (task_id: string): Promise<void> {
    const task = await this.tasksRepositories.findTaskById(task_id)

    if (!task) {
      throw new AppError('Task not found')
    }

    await this.tasksRepositories.deleteById(task_id)
  }
}

export { DeleteTaskUseCase }
