import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'
import 'react-toastify/dist/ReactToastify.css'

import App from './app/App'
import './index.css'
import { auth } from '@/store/auth'
import { AuthContext } from '@/hooks/useAuth'
import { theme } from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContext.Provider value={auth}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AuthContext.Provider>
  </React.StrictMode>
)
