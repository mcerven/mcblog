import '../styles/globals.css';
import { GraphqlProvider } from '../graphql/graphqlClient';
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <GraphqlProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GraphqlProvider>
  );
}
