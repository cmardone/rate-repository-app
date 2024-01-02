import { ApolloProvider } from '@apollo/client'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { NativeRouter } from 'react-router-native'
import Main from './src/Main'
import createApolloClient from './src/services/utils/apolloClient'

const client = createApolloClient()

const App = (): React.JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <StatusBar style="light" />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
