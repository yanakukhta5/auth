import { useForm } from 'react-hook-form'

import { useAuth } from '@/hooks/useAuth'
import { Userform } from '@/components/Userform'
import { Title } from '@/components/Title'
import { User } from '@/services/auth'

export function Auth() {
  const auth = useAuth()

  const { reset } = useForm<User>()

  function onFormSubmit(data: User) {
    reset({
      username: '',
      password: ''
    })
    auth.authUser(data)
  }
  
  return (
    <>
      <Title>Страница авторизации</Title>
      <Userform handler={onFormSubmit} />
    </>
  )
}
