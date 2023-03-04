import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Input } from '@/components/Input'
import { Output } from '@/components/Output'
import { Label } from '@/components/Label'
import { Select } from '@/components/Select'
import { Checkbox } from '@/components/Checkbox'
import { Userform as Form, Submit, UserContainer, CheckboxLabel } from './style'

import { IUser } from '@/services/types'
import { users } from '@/services/users'

const enum Modes {
  CREATE = 'create',
  EDIT = 'edit'
}

type UserFormProps = {
  setChange: (timestamp: number) => void
}

export const Userform: React.FC<UserFormProps> = ({ setChange }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<IUser>({
    mode: 'onBlur'
  })

  const [mode, setMode] = useState<Modes>(Modes.CREATE)

  function selectHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    setMode(event.target.value as Modes)
  }

  async function onFormSubmit(data: IUser) {
    console.log(data)
    if (mode === Modes.CREATE) {
      await users.createUser({ ...data, is_active: Boolean(data.is_active) })
    }
    if (mode === Modes.EDIT) {
      await users.editUser(
        { ...data, is_active: Boolean(data.is_active) },
        data.id as number
      )
    }
    setChange(Date.now())
    reset({
      username: '',
      password: '',
      id: '',
      first_name: '',
      last_name: '',
      is_active: ''
    })
  }
  return (
    <UserContainer>
      <Select
        onChange={selectHandler}
        options={[
          { value: Modes.CREATE, name: 'Создать пользователя' },
          { value: Modes.EDIT, name: 'Редактировать пользователя' }
        ]}
        value={mode}
      />
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        {mode === Modes.EDIT && (
          <Label htmlFor="id">
            <Input
              {...register('id', {
                required: 'Введите id пользователя',
                min: {
                  value: 1,
                  message: 'Идентификатор пользователя не может быть меньше 1'
                }
              })}
              placeholder="Идентификатор пользователя"
              type="number"
            />
            <Output>{errors?.id?.message as string}</Output>
          </Label>
        )}

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
          />
          <Output>{errors?.username?.message as string}</Output>
        </Label>

        <Label htmlFor="password">
          <Input
            {...register('password', {
              required: 'Введите пароль',
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
            id="password"
            placeholder="Пароль пользователя"
          />
          <Output>{errors?.password?.message as string}</Output>
        </Label>

        <Label htmlFor="first_name">
          <Input
            {...register('first_name', {
              required: 'Введите имя пользователя',
              minLength: {
                value: 3,
                message:
                  'Имя пользователя пользователя не может быть короче 3 букв'
              }
            })}
            id="first_name"
            placeholder="Имя пользователя"
            type="text"
          />
          <Output>{errors?.first_name?.message as string}</Output>
        </Label>

        <Label htmlFor="last_name">
          <Input
            {...register('last_name', {
              required: 'Введите фамилию пользователя',
              minLength: {
                value: 5,
                message:
                  'Фамилия пользователя пользователя не может быть короче 5 букв'
              }
            })}
            id="last_name"
            placeholder="Фамилия пользователя"
            type="text"
          />
          <Output>{errors?.last_name?.message as string}</Output>
        </Label>

        <CheckboxLabel htmlFor="is_active">
          Активен ли пользователь?
          <Checkbox id="is_active" />
        </CheckboxLabel>

        <Submit variant="primary" value="Отправить" type="submit" />
      </Form>
    </UserContainer>
  )
}
