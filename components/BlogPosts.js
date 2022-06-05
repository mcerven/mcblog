import React from 'react';

export default function BlogPosts({ posts }) {
  return (
    <div>
      {posts.map(p => {
        return (
          <div key={p.id}>
            {p.title}
          </div>
        )
      })}
    </div>
  )
}
