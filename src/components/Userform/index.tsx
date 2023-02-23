import React from 'react'
import { useForm } from 'react-hook-form'

import { Submit, Form as Form_ } from './style'
import { Input } from '@/components/Input'
import { Output } from '@/components/Output'
import { Label } from '@/components/Label'
import { IUser, IAuth } from '@/services/types'

export function Userform(props: {
  handler: (data: IUser) => void
  value?: string,
  children?: React.ReactNode
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<IUser>({
    mode: 'onBlur'
  })

  function onFormSubmit(data: IUser) {
    reset({
      username: '',
      password: ''
    })
    props.handler(data)
  }

  return (
    <Form_ onSubmit={handleSubmit(onFormSubmit)}>
      <>
        <Label htmlFor="username">
          <Input
            {...register('username', {
              required: 'Введите юзернейм',
              minLength: {
                value: 2,
                message:
                  'Имя пользователя не может состоять менее чем из 2 символов'
              }
            })}
            id="username"
            placeholder="Юзернейм пользователя"
            value={props.value ? props.value : undefined}
          />
          <Output>{errors?.username?.message as string}</Output>
        </Label>

        <Label htmlFor="password">
          <Input
            {...register('password', {
              required: 'Введите пароль',
              minLength: {
                value: 3,
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

        { props.children }

        <Submit variant="primary" value="Отправить" type="submit" />
      </>
    </Form_>
  )
}
