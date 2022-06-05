import React from 'react';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api-eu-central-1.graphcms.com/v2/cl41k0ti938vn01xv958xeouk/master',
})

const authLink = setContext((_, { headers }) => {
  const token = process.env.BEARER_TOKEN;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export function GraphqlProvider({ children }) {
  return (
    <ApolloProvider client={client}>
      { children }
    </ApolloProvider>
  );
}
