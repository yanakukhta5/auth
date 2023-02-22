import { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'
import { Header } from '@/app/Header'
import { Footer } from './app/Footer'

import { Auth } from '@/pages/Auth'
import { Container } from '@/components/Container'
import styled from '@emotion/styled'

const Content = styled.main`
  flex: 1 1 auto;
`

function App() {
  return (
    <>
      <Header />
      <Content>
        <Container>
          <Auth />
        </Container>
      </Content>
      <Footer />
    </>
  )
}

export default App
