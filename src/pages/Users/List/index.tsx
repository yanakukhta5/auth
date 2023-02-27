import React, { useEffect, useState } from 'react'
import { Select } from '@/components/Select'
import { User } from './User'
import { Wrapper, ListTitle, WrapperUsers } from './style'
import { users } from '@/services/users'

type Sort = 'username' | 'id'

interface IUser {
  id: number
  username: string
}

type ListProps = {
  change: number
}

export const List: React.FC<ListProps> = ({ change }) => {
  const [sort, setSort] = useState<string>('id')
  const [usersArr, setUsersArr] = useState<IUser[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await users.getUsers()
      setUsersArr(data)
    }
    fetchData()
  }, [change])

   function sortPort(event: React.ChangeEvent<HTMLSelectElement>) {
    const newValue = event.target.value
    setSort(newValue as Sort)
    setUsersArr(
      [...usersArr].sort((a, b) => {
        if (newValue === 'id') return a.id - b.id
        if (newValue === 'username') return a.username.localeCompare(b.username)
        return 0
      })
    )
  }

  return (
    <Wrapper>
      <ListTitle>Список пользователей, отсортированный по </ListTitle>
      <Select
        value={sort}
        onChange={sortPort}
        options={[
          { value: 'id', name: 'ID' },
          { value: 'username', name: 'юзернейму' }
        ]}
      />
      <WrapperUsers>
        {usersArr &&
          usersArr.map((user) => (
            <User
              id={user.id as number}
              username={user.username}
              key={user.id}
            />
          ))}
      </WrapperUsers>
    </Wrapper>
  )
}
