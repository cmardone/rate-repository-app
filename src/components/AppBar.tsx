import Constants from 'expo-constants'
import { ScrollView, StyleSheet, View } from 'react-native'
import theme from '../theme'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
  },
  scroll: {
    paddingBottom: 15,
  },
})
interface Route {
  to: string
  label: string
}

const routes: Route[] = [
  { to: '/', label: 'Repositories' },
  { to: '/login', label: 'Login' },
]
const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scroll}
      >
        {routes.map((route: Route, index: number) => (
          <AppBarTab key={`${route.to}-${index}`} to={route.to}>
            {route.label}
          </AppBarTab>
        ))}
      </ScrollView>
    </View>
  )
}

export default AppBar
