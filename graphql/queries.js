import { gql } from '@apollo/client';

export const POSTS = gql`
  query Posts {
    posts {
      id
      title
      slug
      datePublished
      coverPhoto {
        url
      }
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
    }
  }
`;

export const POST = gql`
  query Post($slug: String!) {
    post(where: {slug: $slug}) {
      id
      title
      slug
      datePublished
      coverPhoto {
        url
      }
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
    }
  }
`;

export const POST_SLUGS = gql`
  query PostSlugs {
    posts {
      slug
    }
  }
`;
