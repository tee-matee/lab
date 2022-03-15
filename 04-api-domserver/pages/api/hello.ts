// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import ReactDOMServer from 'react-dom/server';
import ExamplePage from '../example'
let fs = require('fs')
type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  fs.readFile('./example', null, function (error, data) {
    if (error) {
      console.log('error', error)
    } else {
      console.log('data', data)
    }
  });
  res.status(200).json({ name: ReactDOMServer.renderToStaticNodeStream(ExamplePage) })
}
