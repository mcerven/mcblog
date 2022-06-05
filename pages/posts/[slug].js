import React from 'react';
import { POST, POST_SLUGS } from '../../graphql/queries';
import { client } from '../../graphql/graphqlClient';

export async function getStaticPaths() {
  const data = await client.query({ query: POST_SLUGS });
  const paths = data.data.posts.map(p => ({ params: { slug: p.slug } }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const data = await client.query({ query: POST, variables: { slug: params.slug } });

  return {
    props: {
      post: data.data.post
    },
    revalidate: 60
  }
}

export default function Post({ post }) {
  return (
    <main>
      { post.title }
    </main>
  )
}
