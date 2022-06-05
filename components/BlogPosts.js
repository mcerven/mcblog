import Link from 'next/link';
import React from 'react';

export default function BlogPosts({ posts }) {
  return (
    <div>
      {posts.map(p => {
        return (
          <div key={p.id}>
            <Link href={`/posts/${p.slug}`}>{p.title}</Link>
          </div>
        )
      })}
    </div>
  )
}
