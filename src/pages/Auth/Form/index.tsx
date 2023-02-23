import { useAuth } from '@/hooks/useAuth';
import { useForm } from 'react-hook-form'

import { Submit, Form as Form_, Input, Label, Output } from './style'
import  { User } from '@/services/auth'

export function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit, reset
  } = useForm<User>({
   mode: "onBlur"
  })

  const auth = useAuth()

  function onFormSubmit(data: User){
    reset({
      username:'',
      password: ''
    })
    auth.authUser(data)
  }

  return (
   <Form_ onSubmit={handleSubmit(onFormSubmit)} >
    <Label>
     Имя пользователя: 
     <Input {...register('username', {
      required: "Введите имя",
      minLength: {
       value: 3,
       message: "Имя пользователя не может состоять менее чем из 3 символов"
      },
     })}
     placeholder="Username" 
    // value={localStorage.getItem('username') || ''}
     value={localStorage.getItem('username') || 'test_super'}
      />
     <Output>{errors?.username?.message as string}</Output>
    </Label>


    <Label>
     Пароль: 
     <Input {...register('password', {
      required: "Введите пароль",
      minLength: {
       value: 3,
       message: "Пароль не может состоять менее чем из 6 символов",
      },
      pattern: {
        value: /^[^а-яё]+$/iu,
        message: "Невалидный пароль"
      }
     })}
     placeholder="Password"
     value='Nf<U4f<rDbtDxAPn'     
     />
     <Output>{errors?.password?.message as string}</Output>
    </Label>

    <Submit variant='primary' value="Отправить" type="submit"/>
   </Form_>
  )
}
