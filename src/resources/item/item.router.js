import { Router } from 'express'
import Controllers from './item.controllers'
const router = Router()

router
  .route('/')
  .get(Controllers.getOne)
  .post(Controllers.createOne)

router
  .route('/:id')
  .get(Controllers.getOne)
  .put(Controllers.updateOne)
  .delete(Controllers.removeOne)
export default router
