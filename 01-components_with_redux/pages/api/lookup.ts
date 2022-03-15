import type { NextApiRequest, NextApiResponse } from 'next'

type listValue = {
    name: string,
    value: string
}

type LookupListValue = {
    language: string,
    list: listValue[]
}

type LookupList = LookupListValue[]

const lookupList: LookupList = [
    // index 0 is default not change this index
    {
        "language": "thai",
        "list": [
            {
                "name": "เมธี",
                "value": "0"
            }
        ]
    },
    {
        "language": "english",
        "list": [
            {
                "name": "matee",
                "value": "1"
            }
        ]
    }
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<LookupList>
) {
    let lookupListResponse: LookupList = []
    lookupListResponse.push(lookupList.find(f => f.language === req.query.language) || lookupList[0])
    res.status(200).json(lookupListResponse)
}
