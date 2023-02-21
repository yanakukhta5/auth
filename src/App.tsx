import { useAuth } from '@/hooks/useAuth'
import { Header } from '@/app/Header'

function App() {
  const auth = useAuth()
  auth.authUser()
  return (
    <div className="App">
      <Header></Header>
    </div>
  )
}

export default App
