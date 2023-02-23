import { observer } from 'mobx-react-lite'
import styled from '@emotion/styled'

import {users} from '@/services/users'

import { Header } from '@/app/Header'
import { Footer } from './app/Footer'

import { Container } from '@/components/Container'

import { Auth } from '@/pages/Auth'
import { Users } from '@/pages/Users'
import { useAuth } from './hooks/useAuth'

const Content = styled.main`
  flex: 1 1 auto;
`

const App = observer(function() {
  const auth = useAuth()

  return (
    <>
      <Header />
      <Content>
        <Container>
          {auth.authorized ? <Users /> : <Auth />}
        </Container>
      </Content>
      <Footer />
    </>
  )
})

export default App
