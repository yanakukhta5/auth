import { useAuth } from '@/hooks/useAuth'
import { Form } from '@/pages/Auth/Form'
import { Title } from '@/components/Title'
import { IAuth } from '@/services/types'
export function Auth() {

  return (
    <>
      <Title>Страница авторизации</Title>
      <Form />
    </>
  )
}
