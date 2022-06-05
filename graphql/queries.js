import { gql } from '@apollo/client';

export const POSTS = gql`
  {
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