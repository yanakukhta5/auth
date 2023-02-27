import { makeAutoObservable, runInAction } from 'mobx'

import { auth as authService } from '@/services/auth'

import { IAuth } from '@/services/types'

class Auth {
  token: string | null = localStorage.getItem('token')
  username: string | null = localStorage.getItem('username')

  constructor() {
    makeAutoObservable(this)
  }

  get authorized() {
    return Boolean(this.token)
  }

  async authUser(obj: IAuth) {
    const parsed = await authService.login(obj)
    runInAction(() => {
      this.token = parsed.token
      if (this.token) {
        this.username = obj.username
        localStorage.setItem('token', this.token)
        localStorage.setItem('username', obj.username)
        alert('Вы успешно авторизовались')
      }
      else {
        alert('Неправильный пароль или логин')
      }
    })
  }

  exitUser() {
    runInAction(() => {
      this.token = ''
      localStorage.removeItem('token')
      alert('Вы вышли из сервиса')
    })
  }
}

export const auth = new Auth()
