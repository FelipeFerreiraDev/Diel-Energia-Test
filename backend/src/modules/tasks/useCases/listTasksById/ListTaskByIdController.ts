import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListTaskByIdUseCase } from './ListTaskByIdUseCase'

class ListTaskByIdController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { task_id } = request.params

    const listTaskByIdUseCase = container.resolve(
      ListTaskByIdUseCase
    )

    const tasks = await listTaskByIdUseCase.execute(task_id)

    return response.json(tasks)
  }
}

export { ListTaskByIdController }
