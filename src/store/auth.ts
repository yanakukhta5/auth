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

  async authUser(user: IAuth) {
    const parsed = await authService.login(user)

    runInAction(() => {
      this.token = parsed.token

      if (this.token) {
        this.username = user.username
        localStorage.setItem('token', this.token)
        localStorage.setItem('username', user.username)
      }
    })
  }

  exitUser() {
    runInAction(() => {
      this.token = ''
      localStorage.removeItem('token')
    })
  }
}

export const auth = new Auth()
