import '@shared/container/providers'

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository'
import { UsersTokensRepository } from '@modules/accounts/infra/typeorm/repositories/UsersTokensRepository'
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository'
import { IUsersTokensRepository } from '@modules/accounts/repositories/IUsersTokensRepository'
import { container } from 'tsyringe'
import { ITasksRepository } from '@modules/tasks/repositories/ITasksRepository'
import { TasksRepository } from '@modules/tasks/infra/typeorm/repositories/TasksRepository'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)

container.registerSingleton<IUsersTokensRepository>(
  'UsersTokensRepository',
  UsersTokensRepository
)

container.registerSingleton<ITasksRepository>(
  'TasksRepository',
  TasksRepository
)
