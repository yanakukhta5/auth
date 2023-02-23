import React from "react"
import { Wrapper, Text } from "./style"

type UserProps = {
 id: number,
 username: string
}

export const User: React.FC<UserProps> = ({id, username}) => {
 return (
  <Wrapper>
   <Text>id: {id}</Text>
   <Text>username: {username} </Text>
  </Wrapper>
 )
}