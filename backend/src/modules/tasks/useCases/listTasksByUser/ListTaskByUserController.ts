import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListTaskByUserUseCase } from './ListTaskByUserUseCase'

class ListTaskByUserController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.user

    const listTaskByUserUseCase = container.resolve(
      ListTaskByUserUseCase
    )

    const tasks = await listTaskByUserUseCase.execute(id)

    return response.json(tasks)
  }
}

export { ListTaskByUserController }
