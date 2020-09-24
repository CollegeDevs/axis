import React from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import defaultTheme from './styles/theme'

const ThemeProvider = ({ children, theme }) => (
  <EmotionThemeProvider theme={theme || defaultTheme}>{children}</EmotionThemeProvider>
)

export default ThemeProvider
