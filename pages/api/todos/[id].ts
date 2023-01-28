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
    const filter = todoJSON.filter((element) => element.id == queryId)
    const { userId, id, title, completed } = req.body ? req.body : false
    const findIfExists = todoJSON.findIndex(object => object.id === id);
    const checkIfIndexExists = todoJSON.findIndex(object => object.id == queryId);


    let index = 0
    switch (req.method) {
        case 'GET':
            checkIfIndexExists === -1 ? res.send({message:`ID:${queryId} Not Found`}) : res.status(200).json(filter)
            break;
        case 'POST':
            if (findIfExists === -1) { todoJSON.push(req.body); res.status(200).json(todoJSON); } else { res.redirect('/404')  }
            break;
        case 'PUT':
            todoJSON.forEach((v, i) => {
                if (v.id == id) {
                    todoJSON[i].completed = completed
                    todoJSON[i].id = id
                    todoJSON[i].title = title
                    todoJSON[i].userId = userId
                }
                index = i
            })
            res.status(200).json(todoJSON[index])
            break;
    }
}