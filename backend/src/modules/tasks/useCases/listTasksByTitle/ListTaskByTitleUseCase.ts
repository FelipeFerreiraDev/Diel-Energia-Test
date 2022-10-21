import { Task } from '@modules/tasks/infra/typeorm/entities/Task'
import { ITasksRepository } from '@modules/tasks/repositories/ITasksRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
class ListTaskByTitleUseCase {
  constructor (
    @inject('TasksRepository')
    private readonly tasksRepositories: ITasksRepository
  ) {}

  async execute (title: string, user_id: string): Promise<Task[]> {
    const tasks = await this.tasksRepositories.findByTitle(title, user_id)

    return tasks
  }
}

export { ListTaskByTitleUseCase }
