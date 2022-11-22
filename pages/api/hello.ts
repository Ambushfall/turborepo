// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data  {
  Name: string,
  "$schema":[],
  Auth?:boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ '$schema': [], Auth: false, Name: 'Ambushfall' })
}
