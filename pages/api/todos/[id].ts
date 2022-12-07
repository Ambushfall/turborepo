// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { todoJSON } from '../todos'


type ShapeTODO = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const queryId: any = req.query.id || "0"
    const filter = todoJSON.filter((element) => {
        if (element.id !== queryId) res.status(500)// .send({ error: 'failed to fetch data' })
        return element.id == queryId
    })

    const { userId, id, title, completed } = req.body ? req.body : false
    let index = 0
    switch (req.method) {
        case 'GET':
            res.status(200).json(filter)
            break;
        case 'POST':
            const findItem = todoJSON.findIndex(object => object.id === id);
            findItem === -1 ? todoJSON.push(req.body) : res.status(400)
            res.status(200).json(todoJSON)
            break;

        case 'PUT':
            todoJSON.forEach((v, i) => {
                if(v.id == id) {
                    todoJSON[i].completed = completed
                    todoJSON[i].id = id
                    todoJSON[i].title = title
                    todoJSON[i].userId = userId
                }
                index = i
            })
            res.status(200).json(todoJSON[index])
            break;
        default:
            // console.warn(req.query.id)
            res.status(200).json(filter)
            break;
    }
}