import { Header as Header_, Link, Logo, Links } from './style'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Row } from '@/components/Row'

import { useAuth } from '@/hooks/useAuth'

export function Header() {
  const auth = useAuth()
  return (
    <Header_>
      <Container>
        <Row>
          <Logo src="/img/logo.svg" />
          <Links>
            <Link>Link</Link>
            <Link>{`${auth.authorized}`}</Link>
            <Link>Link</Link>
            <Link>Link</Link>
            <Link>Link</Link>
          </Links>
          <Button variant="primary">Button</Button>
        </Row>
      </Container>
    </Header_>
  )
}
