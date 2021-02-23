import express from 'express'
import { getCoinbaseRoutes } from './coinbaseRoutes'

function getRoutes() {
    const router = express.Router()
    router.use('/coinbase', getCoinbaseRoutes)
    return router
}
export { getRoutes }