import express from 'express'
import { fulfillment_order } from '../controllers/update_order_status.controller'

const router = express.Router()

router.get('/fulfillment', fulfillment_order)


export default router



















