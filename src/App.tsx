import { useAuth } from '@/hooks/useAuth'
import { Header } from '@/app/Header'
import { Auth } from '@/pages/Auth'
import { Container } from '@/components/Container'
import { Footer } from './app/Footer'

function App() {
  const auth = useAuth()
  auth.authUser()
  return (
    <div className="App">
      <Header />
      <Container>
        <Auth />
      </Container>
      <Footer />
    </div>
  )
}

export default App
