import {
  makeAutoObservable,
  autorun,
  runInAction
} from 'mobx'

export interface User {
  username: string,
  password: string
}

class Auth {
  token: string | null = localStorage.getItem('token')

  constructor() {
    makeAutoObservable(this)
  }

  get authorized(){
   return Boolean(this.token)
  }

  async authUser(obj: User) {
    const response = await fetch(
      'https://test-assignment.emphasoft.com/api/v1/login/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      }
    )
    const parsed = await response.json()

    runInAction(() => {
      this.token = parsed.token
      if(this.token){
        localStorage.setItem('token', this.token)
        alert('Вы успешно авторизовались')
      }
    })
  }
}

export const auth = new Auth()
