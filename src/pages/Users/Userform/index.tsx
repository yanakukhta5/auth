import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Input } from '@/components/Input'
import { Output } from '@/components/Output'
import { Label } from '@/components/Label'
import {Userform as Form, Submit, Select, UserContainer } from './style'

import { IUser } from '@/services/types'
import { users } from '@/services/users'

type Mode = 'create' | 'edit'

export function Userform(){

 const {
  register,
  formState: { errors },
  handleSubmit,
  reset
} = useForm<IUser>({
  mode: 'onBlur'
})

const [mode, setMode] = useState<Mode>('create')

function selectHandler(event: React.ChangeEvent<HTMLSelectElement>) {
  setMode(event.target.value as Mode)
}

async function onFormSubmit(data: IUser) {
  if (mode === 'create') {
    await users.createUser({ ...data, is_active: Boolean(data.is_active) })
  }
  if (mode === 'edit') {
    await users.editUser({ ...data, is_active: Boolean(data.is_active) }, data.id as number)
  }
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
  <Select onChange={selectHandler}>
  <option value="create">Создать пользователя</option>
  <option value="edit">Редактировать пользователя</option>
 </Select>
  <Form onSubmit={handleSubmit(onFormSubmit)}>
  {mode === 'edit' ? (
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
  ) : ('')}

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
            if ( !Boolean( value.split('').find((item) => item.match(/^[0-9]+$/)) ) )
              return 'В пароле должны быть цифры'
          },
          withCapital: (value) => {
            if ( !Boolean( value.split('').find((item) => item.match(/[A-Z]/)) ) )
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

  <Label htmlFor="is_active">
    <Input
      {...register('is_active', {
        required: 'Введите сведения об активности пользователя',
        min: {
          value: 0,
          message: 'Активность пользователя не может быть меньше 0'
        },
        max: {
          value: 1,
          message: 'Активность пользователя не может быть больше 1'
        }
      })}
      id="is_active"
      placeholder="Активность пользователя"
      type="number"
    />
    <Output>{errors?.is_active?.message as string}</Output>
  </Label>

  <Submit variant="primary" value="Отправить" type="submit" />
</Form>
</UserContainer>
 )
}