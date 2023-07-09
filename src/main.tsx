import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import * as GlobalStyles from './shared/themes/GlobalStyles.style.tsx'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from './shared/themes/LightTheme.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={LightTheme}>
    <GlobalStyles.GlobalStyles/>
    <App />
  </ThemeProvider>
)
