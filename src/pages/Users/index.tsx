import { Title } from '@/components/Title'
import { Userform } from './Userform'
import { List } from './List'
import { Content } from './style'
import { useState } from 'react'

export function Users() {
  const [change, setChange] = useState<number>(Date.now())
  return (
    <>
      <Title>Страница редактирования и просмотра пользователей</Title>

      <Content>
        <Userform setChange={setChange} />
        <List change={change} />
      </Content>
    </>
  )
}
