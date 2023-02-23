import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Submit, Form as Form_ } from './style'
import { Input } from '@/components/Input'
import { Output } from '@/components/Output'
import { Label } from '@/components/Label'
import { IAuth } from '@/services/types'
import { useAuth } from '@/hooks/useAuth'

export function Form() {

  const [username, setUsername] = useState('')

  const auth = useAuth()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<IAuth>({
    mode: 'onBlur'
  })

  function handleUsername(event: React.ChangeEvent<HTMLInputElement>){
    setUsername(event?.target.value)
  }

  function onFormSubmit(data: IAuth) {
    auth.authUser(data)
    reset({
      username: '',
      password: '',
    })
    setUsername('')
  }

  return (
    <Form_ onSubmit={handleSubmit(onFormSubmit)}>
        <Label htmlFor="username">
          <Input
            {...register('username', {
              required: 'Введите Ваш юзернейм',
              minLength: {
                value: 2,
                message:
                  'Имя пользователя не может состоять менее чем из 2 символов'
              }
            })}
            id="username"
            placeholder="Юзернейм пользователя"
            value={localStorage.getItem('username') || username}
            onChange={handleUsername}
          />
          <Output>{errors?.username?.message as string}</Output>
        </Label>

        <Label htmlFor="password">
          <Input
            {...register('password', {
              required: 'Введите Ваш пароль',
              minLength: {
                value: 8,
                message: 'Пароль не может состоять менее чем из 8 символов'
              },
              pattern: {
                value: /^[^а-яё]+$/iu,
                message: 'Невалидный пароль'
              },
              validate: {
                withNumbers: (value) => {
                  if ( !Boolean( value.split('').find((item) => item.match(/^[0-9]+$/)) ) )
                    return 'В пароле должны быть цифры'
                },
                withCapital: (value) => {
                  if ( !Boolean( value.split('').find((item) => item.match(/[A-Z]/)) ) )
                    return 'В пароле должны быть заглавные буквы'
                }
              }
            })}
            id='password'
            placeholder="Пароль пользователя"
          />
          <Output>{errors?.password?.message as string}</Output>
        </Label>

        <Submit variant="primary" value="Отправить" type="submit" />
    </Form_>
  )
}