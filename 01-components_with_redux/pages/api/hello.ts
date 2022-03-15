// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse, InferGetServerSidePropsType } from 'next'
import ReactDOMServer from 'react-dom/server'
import Helpcheck from '../helpcheck'

type Post = {
  author: string
  content: string
}

export const getServerSideProps = async () => {
  const res = await fetch('https://.../posts')
  const posts: Post[] = await res.json()
  const x = ReactDOMServer.renderToNodeStream(<Helpcheck/>)
  return {
    props: {
      posts,
    },
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  res.status(200).json({ name: 'John Doe' })
}