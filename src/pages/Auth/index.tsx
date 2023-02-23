import { useAuth } from '@/hooks/useAuth'
import { Userform } from '@/components/Userform'
import { Title } from '@/components/Title'
import { User } from '@/services/types'

export function Auth() {
  const auth = useAuth()

  function onFormSubmit(data: User) {
    auth.authUser(data)
  }

  return (
    <>
      <Title>Страница авторизации</Title>
      <Userform mode='auth' handler={onFormSubmit} value={localStorage.getItem('username') || ''} />
    </>
  )
}
