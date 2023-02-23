import { makeAutoObservable, runInAction } from 'mobx'

import { auth as authService, User } from '@/services/auth'

class Auth {
  token: string | null = localStorage.getItem('token')
  username: string | null = localStorage.getItem('username')

  constructor() {
    makeAutoObservable(this)
  }

  get authorized() {
    return Boolean(this.token)
  }

  async authUser(obj: User) {
    const parsed = await authService.login(obj)
    runInAction(() => {
      this.token = parsed.token
      if (this.token) {
        this.username = obj.username
        localStorage.setItem('token', this.token)
        localStorage.setItem('username', obj.username)
        alert('Вы успешно авторизовались')
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
