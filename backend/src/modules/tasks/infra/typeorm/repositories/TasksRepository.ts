import { ICreateTaskDTO } from '@modules/tasks/dtos/ICreateTaskDTO'
import { IUpdateTaskDTO } from '@modules/tasks/dtos/IUpdatedTaskDTO'
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

  async findById (task_id: string): Promise<Task> {
    const task = await this.repository.findOne(task_id)

    return task
  }

  async findByUser (user_id: string): Promise<Task[]> {
    const task = await this.repository.find({
      where: { user_id }
    })

    return task
  }

  async updateById ({
    task_id,
    title,
    description,
    date,
    runtime
  }: IUpdateTaskDTO): Promise<Task> {
    if (title) {
      await this.repository.update(task_id, { title })
    }
    if (description) {
      await this.repository.update(task_id, { description })
    }
    if (date) {
      await this.repository.update(task_id, { date })
    }
    if (runtime) {
      await this.repository.update(task_id, { runtime })
    }

    const task = await this.repository.findOne(task_id)

    return task
  }

  async deleteById (task_id: string): Promise<void> {
    await this.repository.delete(task_id)
  }

  async findByTitle (title: string, user_id: string): Promise<Task[]> {
    const task = (await this.repository.find({
      where: { user_id }
    })).filter(t => t.title.startsWith(title))

    return task
  }
}

export { TasksRepository }
