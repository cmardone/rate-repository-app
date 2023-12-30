import { StyleSheet } from 'react-native'
import { Link, useLocation } from 'react-router-native'
import theme from '../theme'
import StyledText from './StyledText'

interface Props {
  children: React.JSX.Element | string
  to: string
}

const styles = StyleSheet.create({
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10,
  },
  linkActive: {
    color: theme.appBar.textPrimary,
  },
})

const AppBarTab = ({ to, children }: Props) => {
  let { pathname } = useLocation()
  const active = to === pathname
  return (
    <Link to={to}>
      <StyledText
        fontWeight="bold"
        style={[styles.text, active && styles.linkActive]}
      >
        {children}
      </StyledText>
    </Link>
  )
}

export default AppBarTab
