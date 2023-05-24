import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const token_github =
  "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";

const authLink = setContext((_, { headers }) => {
  // const token = localStorage.getItem(token_github);

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token_github}`,
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
export { client };
