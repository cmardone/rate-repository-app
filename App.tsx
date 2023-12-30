import { StyleSheet } from 'react-native'
import { NativeRouter } from 'react-router-native'
import Main from './src/views/Main'

const App = (): React.JSX.Element => {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
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
