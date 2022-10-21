import { Task } from '@modules/tasks/infra/typeorm/entities/Task'
import { ITasksRepository } from '@modules/tasks/repositories/ITasksRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
class ListTaskByUserUseCase {
  constructor (
    @inject('TasksRepository')
    private readonly tasksRepositories: ITasksRepository
  ) {}

  async execute (user_id: string): Promise<Task[]> {
    const tasksByUser = await this.tasksRepositories.findByUser(
      user_id
    )

    return tasksByUser
  }
}

export { ListTaskByUserUseCase }
