import { Router } from 'express'

import { authenticateRoutes } from './authenticate.routes'
import { passwordRoutes } from './password.routes'
import { taskRoutes } from './tasks.routes'
import { usersRoutes } from './users.routes'

const router = Router()

router.use('/users', usersRoutes)
router.use('/password', passwordRoutes)
router.use('/tasks', taskRoutes)
router.use(authenticateRoutes)

export { router }
