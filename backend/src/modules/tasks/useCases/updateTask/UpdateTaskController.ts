import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateTaskUseCase } from './UpdateTaskUseCase'

class UpdateTaskController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { task_id } = request.params
    const { title, description, date, runtime } = request.body

    const createTaskUseCase = container.resolve(UpdateTaskUseCase)

    const task = await createTaskUseCase.execute({
      task_id,
      title,
      description,
      date,
      runtime
    })

    return response.status(201).json(task)
  }
}

export { UpdateTaskController }
