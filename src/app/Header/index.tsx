import { observer } from 'mobx-react-lite'

import { Header as Header_, Logo } from './style'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Row } from '@/components/Row'

import { useAuth } from '@/hooks/useAuth'

export const Header = observer(() => {
  const auth = useAuth()

  function handleClick() {
    auth.exitUser()
  }

  return (
    <Header_>
      <Container>
        <Row>
          <Logo src="/img/logo.svg" />

          {auth.authorized && (
            <Button onClick={handleClick} variant="primary">
              Выйти
            </Button>
          )}
        </Row>
      </Container>
    </Header_>
  )
})
