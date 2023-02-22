import { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'
import { Header } from '@/app/Header'
import { Footer } from './app/Footer'

import { Auth } from '@/pages/Auth'
import { Container } from '@/components/Container'

function App() {
  return (
    <>
      <Header />
      <Container>
        <Auth />
      </Container>
      <Footer />
    </>
  )
}

export default App
