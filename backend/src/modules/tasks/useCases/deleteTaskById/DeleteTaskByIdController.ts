import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteTaskUseCase } from './DeleteTaskByIdUseCase'

class DeleteTaskByIdController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { task_id } = request.params

    const deleteTaskUseCase = container.resolve(DeleteTaskUseCase)

    const task = await deleteTaskUseCase.execute(task_id)

    return response.status(201).json(task)
  }
}

export { DeleteTaskByIdController }
