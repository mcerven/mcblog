import React from 'react';
import { POST, POST_SLUGS } from '../../graphql/queries';
import { client } from '../../graphql/graphqlClient';
import Image from 'next/image';
import Head from 'next/head';

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
    <div>
      <Head>
        <title>{post.title} | MC Blog</title>
      </Head>
      <div>
        <div className="author">
          <div className="avatar">
            <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image
                width={64}
                height={64}
                src={post.author.avatar.url}
                alt={post.author.name}>
              </Image>
            </div>
          <h6>{post.author.name}</h6>
          </div>
        </div>
        <Image src={ post.coverPhoto.url } width={600} height={300} alt="Cover photo" />
        <h1 className="text-3xl md:text-5xl mt-6 mb-4 font-bold">{ post.title }</h1>
        <div
          dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
      </div>
    </div>
  )
}
