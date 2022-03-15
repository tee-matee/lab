// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface IRequestBodyData {
    username: string,
    password: string
}

interface IUserData extends IRequestBodyData {
    isAdmin: boolean
}

const userData: IUserData[] = [
    {
        username: "admin",
        password: "admin",
        isAdmin: true
    },
    {
        username: "user",
        password: "user",
        isAdmin: false
    }
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IUserData>
) {
    const body: IRequestBodyData = req.body
    res.status(200).json(
        userData.find(f => f.username === body.username && f.password === body.password) ||
        userData[userData.length - 1]
    )
}