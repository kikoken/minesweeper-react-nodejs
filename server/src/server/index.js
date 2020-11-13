import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { json } from 'body-parser'

const start = async (options) => {
    const app = express()
    app.use(helmet())
    app.use(cors())
    app.use(json())

    app.use((err, req, res, next) => {
        res.status(500).send('Something went wrong!')
        throw new Error('Something went wrong!', `err: ${err}`)
    })


    const server = app.listen(options.port, async () => server )

    return await server

}

export default Object.assign({}, {start})