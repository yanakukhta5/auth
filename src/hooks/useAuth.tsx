import React from "react"

import { auth } from '@/store/auth'

export const AuthContext = React.createContext(auth)

export const useAuth = () => React.useContext(AuthContext);