import { ApolloClient, InMemoryCache } from '@apollo/client'

const createApolloClient = () => {
  return new ApolloClient({
    uri: 'http://192.168.1.104:4000',
    cache: new InMemoryCache(),
  })
}

export default createApolloClient
