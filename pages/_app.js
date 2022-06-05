import '../styles/globals.css';
import { GraphqlProvider } from '../graphql/graphqlClient';

export default function MyApp({ Component, pageProps }) {
  return (
    <GraphqlProvider>
      <Component {...pageProps} />
    </GraphqlProvider>
  );
}
