import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateTaskUseCase } from './CreateTaskUseCase'

class CreateTaskController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const { title, description, date, runtime } = request.body

    const createTaskUseCase = container.resolve(CreateTaskUseCase)

    const task = await createTaskUseCase.execute({
      title,
      description,
      date,
      runtime,
      user_id: id
    })

    return response.status(201).json(task)
  }
}

export { CreateTaskController }
