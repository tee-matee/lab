function Blog({ posts }: any) {
    console.log('posts', posts)
    return (
        <div>
            Blog: {posts}
        </div>
    )
}

export async function getServerSideProps(context: any) {
    console.log('context', context.req.headers)
    return {
        props: {
            posts: 'posts eieieeii',
        }
    }
}

export default Blog