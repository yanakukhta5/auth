import { useAuth } from '@/hooks/useAuth'
import { Userform } from '@/components/Userform'
import { Title } from '@/components/Title'
import { IAuth } from '@/services/types'

export function Auth() {
  const auth = useAuth()

  function onFormSubmit(data: IAuth) {
    auth.authUser(data)
  }

  return (
    <>
      <Title>Страница авторизации</Title>
      <Userform handler={onFormSubmit} value={localStorage.getItem('username') || ''} />
    </>
  )
}
