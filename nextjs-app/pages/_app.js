import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";


const client = new ApolloClient({
  uri: 'https://b2cdemo.getswift.asia/graphql',
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
 
  return 
  <AppoloProvider client = {client}>
  <Component {...pageProps} />
  </AppoloProvider>
}

export default MyApp
