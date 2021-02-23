import express from 'express'
import coinbaseApiClient from '../services/coinbaseApiClient'

function getCoinbaseRoutes() {
    const router = express.Router()
    router.get('/v1/spot/:coin', handleGetCoinSpotPrice)
    router.get('/v1/sport', testHander)
    return router
}

async function handleGetCoinSpotPrice(req, res) {
    const coin = (req.params.coin + '-USD')
    try{
        const currencyWorth = await coinbaseApiClient.fetchCryptoCurrentWorth(coin)
        res.send(currencyWorth)
    } catch (e) {
        return res.status(500).send(`Unable to fetch the crypto currency ${coin}: ${e.message}`)
    }
}

function testHander(req, res) {
    res.send('Hello')
}
export { getCoinbaseRoutes }

