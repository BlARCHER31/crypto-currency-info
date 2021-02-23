import config from 'config'
import { startServer } from './start'
import logger from 'loglevel'

const isTest = process.env.NODE_ENV === 'test'
const logLevel = process.env.LOG_LEVEL || (isTest ? 'warn' : 'info')

logger.setLevel(logLevel)

async function serverStartup() {
    try{
        await startServer({ port: config.get('app.server.port')})
    } catch(err) {
        logger.error(
            `There was an error trying to start up the server: ${err.message}`
        )
        throw err
    }
}

serverStartup()