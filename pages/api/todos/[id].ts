// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { todoJSON } from '../todos'


type ShapeTODO = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

/* {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
     */

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const id: any = req.query.id || "0"
    const filter = todoJSON.filter((e) => {
        if (e.id !== id) res.status(500)// .send({ error: 'failed to fetch data' })
        return e.id == id
    })

    const body = req.body ? req.body : false

    switch (req.method) {
        case 'GET':
            console.log(req.query.id)
            res.status(200).json(filter)
            break;
        case 'POST':
            todoJSON.push(body)
            console.log(todoJSON)
        default:
            console.warn(req.query.id)
            res.status(200).json(filter)
            break;
    }
}