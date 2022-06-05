import React from 'react';
import { POST, POST_SLUGS } from '../../graphql/queries';
import { client } from '../../graphql/graphqlClient';
import Link from 'next/link';
import Image from 'next/image';

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
      <Link href="/">
        <button className="btn btn-primary">Back</button>
      </Link>
      <div>
        <h1>{ post.title }</h1>
        <div className="author">
          <h6>{post.author.name}</h6>
          <div className="avatar">
            <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image
                width={64}
                height={64}
                src={post.author.avatar.url}
                alt={post.author.name}>
              </Image>
            </div>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
      </div>
    </main>
  )
}
