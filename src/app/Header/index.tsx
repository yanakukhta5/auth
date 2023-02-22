import { observer } from 'mobx-react-lite'

import { Header as Header_, Link, Logo, Links } from './style'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Row } from '@/components/Row'

import { useAuth } from '@/hooks/useAuth'

export const Header = observer(() => {
  const auth = useAuth()
  return (
    <Header_>
      <Container>
        <Row>
          <Logo src="/img/logo.svg" />
          <Links>
            <Link>Link</Link>
            <Link>{auth.authorized}</Link>
            <Link>Link</Link>
            <Link>Link</Link>
            <Link>Link</Link>
          </Links>
          <Button variant="primary">{auth.authorized ? "Выйти" : "Войти"}</Button>
        </Row>
      </Container>
    </Header_>
  )
})
