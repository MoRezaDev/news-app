import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cle8ajeks04so01ufbf8p7718/master",
  cache: new InMemoryCache(),
});

export default client;
