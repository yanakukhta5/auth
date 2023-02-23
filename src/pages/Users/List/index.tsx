import React, { useEffect, useState } from 'react'
import { Select } from '@/components/Select'
import {User} from './User'
import { Wrapper, ListTitle, WrapperUsers } from './style'
import {users} from '@/services/users'
import {IUser} from '@/services/types'

type Sort = 'id' | 'username'

type ListProps = {
  change: number
}

export const List: React.FC<ListProps> = ({change}) => {
  const [sort, setSort] = useState<string>('id')
  const [usersArr, setUsersArr] = useState<IUser[]>([])

  useEffect(() => {
  const fetchData = async () => {
   const data = await users.getUsers()
   setUsersArr(data)
  }
  fetchData()
  }, [change])

  function selectHandler(event: React.ChangeEvent<HTMLSelectElement>) {
   setSort(event.target.value as Sort)
  }

  return (
    <Wrapper>
      <ListTitle>Список пользователей, отсортированный по </ListTitle>
      <Select>
        <option value="id">ID</option>
        <option value="username">юзернейму</option>
      </Select>
      <WrapperUsers>{usersArr && usersArr.map(user => <User id={user.id as number} username={user.username} key={user.id} />) }</WrapperUsers>
    </Wrapper>
  )
}
