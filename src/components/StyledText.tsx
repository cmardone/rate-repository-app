import { StyleSheet, Text } from 'react-native'
import theme from '../theme'

interface Props {
  children?: any
  color?: 'primary' | 'secondary'
  fontSize?: 'body' | 'subheading'
  fontWeight?: 'bold'
  [x: string]: any
}

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: { color: theme.colors.primary },
  colorSecondary: { color: theme.colors.textSecondary },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
})

const StyledText = ({
  children,
  color,
  fontSize,
  fontWeight,
  style,
  ...restOfProps
}: Props) => {
  return (
    <Text
      style={[
        styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        style,
      ]}
      {...restOfProps}
    >
      {children}
    </Text>
  )
}

export default StyledText
