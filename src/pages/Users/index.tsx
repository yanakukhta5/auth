import { useState } from 'react'

import { Userform } from '@/components/Userform'
import { Title } from '@/components/Title'
import { User } from '@/services/types'
import { UserContainer, Select } from './style'
import { users } from '@/services/users'

type Mode = 'create' | 'edit'

export function Users() {
  
  const [mode, setMode] = useState<Mode>('create')

  function submitHandler(event: React.ChangeEvent<HTMLSelectElement>){
    setMode(event.target.value as Mode)
  }

  function onFormSubmit(data: User) {

  }

  return (
    <>
      <Title>Страница редактирования и просмотра пользователей</Title>

      <UserContainer>
        <Select onChange={submitHandler}>
          <option value="create">Создать пользователя</option>
          <option value="edit">Редактировать пользователя</option>
        </Select>
      </UserContainer>
      
      <Userform handler={onFormSubmit} mode={mode} />
    </>
  )
}
