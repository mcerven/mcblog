import { POSTS } from '../graphql/queries';
import { client } from '../graphql/graphqlClient';
import BlogPosts from '../components/BlogPosts';

export async function getStaticProps() {
  const data = await client.query({ query: POSTS });

  return {
    props: {
      posts: data.data.posts
    },
    revalidate: 60
  };
}

export default function Home({ posts }) {
  return (
    <div>
      <BlogPosts posts={posts} />
    </div>
  )
}
