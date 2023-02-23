import { useForm } from 'react-hook-form'

import { Submit, Form as Form_, Input, Label, Output } from './style'
import { User } from '@/services/types'

export function Userform(props: {
  handler: (data: User) => void
  mode: 'auth' | 'create' | 'edit'
  value?: string
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<User>({
    mode: 'onBlur'
  })

  function onFormSubmit(data: User) {
    reset({
      username: '',
      password: '',
      id: undefined
    })
    props.handler(data)
  }

  return (
    <Form_ onSubmit={handleSubmit(onFormSubmit)}>
      <>
        <Label>
          Имя пользователя:
          <Input
            {...register('username', {
              required: 'Введите имя',
              minLength: {
                value: 2,
                message:
                  'Имя пользователя не может состоять менее чем из 2 символов'
              }
            })}
            placeholder="Имя пользователя"
            value={props.value ? props.value : ''}
          />
          <Output>{errors?.username?.message as string}</Output>
        </Label>

        <Label>
          Пароль:
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
                  if (
                    !Boolean(
                      value.split('').find((item) => item.match(/^[0-9]+$/))
                    )
                  )
                    return 'В пароле должны быть цифры'
                },
                withCapital: (value) => {
                  if (
                    !Boolean(
                      value.split('').find((item) => item.match(/[A-Z]/))
                    )
                  )
                    return 'В пароле должны быть заглавные буквы'
                }
              }
            })}
            placeholder="Пароль"
          />
          <Output>{errors?.password?.message as string}</Output>
        </Label>

        { props.mode === 'edit' ? <><Input {...register('id', {
          required: 'Введите id пользователя',
          min: {
            value: 1,
            message: 'Идентификатор пользователя не может быть меньше 1'
          }
        })} placeholder="Идентификатор пользователя" type="number" />
        <Output>{errors?.id?.message as string}</Output>
        </> : '' }

        <Submit variant="primary" value="Отправить" type="submit" />
      </>
    </Form_>
  )
}
