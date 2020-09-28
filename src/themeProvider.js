import React from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import defaultTheme from './styles/theme'

const ThemeProvider = ({ children, theme }) => {
  return (
    <EmotionThemeProvider theme={theme || defaultTheme}>{children}</EmotionThemeProvider>
  )
}

export default ThemeProvider
