/* eslint-disable prettier/prettier */
import { render, RenderResult } from '@testing-library/react'

import theme from 'styles/theme'
import { ThemeProvider } from 'emotion-theming'

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
