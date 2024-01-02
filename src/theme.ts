import { Platform } from 'react-native'

interface Colors {
  textPrimary: string
  textSecondary: string
  primary: string
  white: string
}

interface FontSizes {
  body: number
  subheading: number
}

interface Fonts {
  main: string
}

interface AppBar {
  [x: string]: any
}

interface FontWeights {
  normal:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined
  bold:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined
}

interface Theme {
  appBar: AppBar
  colors: Colors
  fontSizes: FontSizes
  fonts: Fonts
  fontWeights: FontWeights
}

const theme: Theme = {
  appBar: {
    primary: '#24292e',
    textPrimary: '#ffffff',
    textSecondary: '#999999',
  },
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    white: '#fefefe',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
}

export default theme
