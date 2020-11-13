import express from 'express'

import mineFieldRoute from '../../api/mineField'

const router = express.Router()
router.use('/', mineFieldRoute)

export default router