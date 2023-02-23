import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Userform } from '@/components/Userform'
import { Title } from '@/components/Title'
import { Input } from '@/components/Input'
import { Output } from '@/components/Output'
import { Label } from '@/components/Label'
import { UserContainer, Select } from './style'

import { IAuth, IUser } from '@/services/types'
import { users } from '@/services/users'

type Mode = 'create' | 'edit'

export function Users() {
  const {
    register,
    formState: { errors },
    reset
  } = useForm<IUser>({
    mode: 'onBlur'
  })

  const [mode, setMode] = useState<Mode>('create')

  function selectHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    setMode(event.target.value as Mode)
  }

  function onFormSubmit(data: IUser) {
    reset({
      id: undefined,
      is_active: undefined,
      first_name: '',
      last_name: ''
    })
    // if(mode === 'create'){
    //   users.createUser(data)
    // }
    // if(mode === 'edit'){
    //   users.editUser(data)
    // }
    console.log(data)
    throw new Error('Неописанный метод отправки данных на сервер')
  }

  return (
    <>
      <Title>Страница редактирования и просмотра пользователей</Title>

      <UserContainer>
        <Select onChange={ selectHandler }>
          <option value="create">Создать пользователя</option>
          <option value="edit">Редактировать пользователя</option>
        </Select>
      </UserContainer>

      <Userform handler={onFormSubmit}>
        {mode === 'edit' ? (
          <Label htmlFor="">
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
          </Label> ) : ('')}

          <Label htmlFor="first_name">
            <Input
              {...register('first_name', {
                required: 'Введите имя пользователя',
                minLength: {
                  value: 3,
                  message: 'Имя пользователя пользователя не может быть короче 3 букв'
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
                  message: 'Фамилия пользователя пользователя не может быть короче 5 букв'
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
                  message: 'Идентификатор пользователя не может быть меньше 0'
                },
                max: {
                  value: 1,
                  message: 'Идентификатор пользователя не может быть больше 1'
                }
              })}
              id="is_active"
              placeholder="Активность пользователя"
              type="text"
            />
            <Output>{errors?.is_active?.message as string}</Output>
          </Label>
      </Userform>
    </>
  )
}
