import { IUser } from './types'

class Users {
  private headers: {
    'Content-Type': string
    Authorization: string
  }
  constructor() {
    this.headers = {
      'Content-Type': 'application/json',
      Authorization: 'Token ' + localStorage.getItem('token')
    }
  }
  async getUsers() {
    const response = await fetch(
      'https://test-assignment.emphasoft.com/api/v1/users/',
      {
        method: 'get',
        headers: { ...this.headers }
      }
    )
    return await response.json()
  }

  async createUser(obj: IUser) {
    const response = await fetch(
      'https://test-assignment.emphasoft.com/api/v1/users/',
      {
        method: 'post',
        headers: { ...this.headers }
      }
    )

    return await response.json()
  }

  async editUser(obj: IUser, id: number) {
    const response = await fetch(
      `https://test-assignment.emphasoft.com/api/v1/users/${id}`,
      {
        method: 'put',
        headers: { ...this.headers },
        body: JSON.stringify(obj)
      }
    )

    return await response.json()
  }
}

export const users = new Users()
