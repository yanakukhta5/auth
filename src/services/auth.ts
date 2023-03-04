import { IAuth } from './types'

class Auth {
  async login(obj: IAuth) {
    const response = await fetch(
      'https://test-assignment.emphasoft.com/api/v1/login/',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      }
    )
    const parsed = await response.json()
    return parsed
  }

  logout() {
    // logout logic //
  }
}

export const auth = new Auth()
