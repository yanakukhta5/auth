import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'
import { auth } from '@/store/auth'
import { AuthContext } from '@/hooks/useAuth'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContext.Provider value={auth}>
      <App />
    </AuthContext.Provider>
  </React.StrictMode>
)
