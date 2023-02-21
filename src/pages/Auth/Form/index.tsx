import { useForm } from 'react-hook-form'

import { Submit, Form as Form_, Input, Label, Output } from './style'

type FormValues = {
  name: string;
  password: string;
}

export function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit, reset
  } = useForm<FormValues>({
   mode: "onBlur"
  })

  function onFormSubmit(data: FormValues){
   reset({
    name:'',
    password: ''
  })
   console.log(data)
  }

  return (
   <Form_ onSubmit={handleSubmit(onFormSubmit)} >
    <Label>
     Имя пользователя: 
     <Input {...register('name', {
      required: "Введите имя",
      minLength: {
       value: 3,
       message: "Имя пользователя не может состоять менее чем из 3 символов"
      },
     })} placeholder="Username" />
     <Output>{errors?.name?.message as string}</Output>
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
     })} placeholder="Password" />
     <Output>{errors?.password?.message as string}</Output>
    </Label>

    <Submit variant='primary' value="Отправить" type="submit"/>
   </Form_>
  )
}
