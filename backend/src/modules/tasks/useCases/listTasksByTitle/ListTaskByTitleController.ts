import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListTaskByTitleUseCase } from './ListTaskByTitleUseCase'

class ListTaskByTitleController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const { title } = request.body

    const listTaskByTitleUseCase = container.resolve(
      ListTaskByTitleUseCase
    )

    const tasks = await listTaskByTitleUseCase.execute(title, id)

    return response.json(tasks)
  }
}

export { ListTaskByTitleController }
