import { Router }  from 'express'

import mineFieldGet from './minefield.get'


const router = Router()

router.get('/minefield', mineFieldGet)

export default router