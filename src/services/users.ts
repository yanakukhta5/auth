import {IUser} from './types'
 
class Users {
 async getUsers(){
  const response = await fetch(
   'https://test-assignment.emphasoft.com/api/v1/users/', {
     method: 'get',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Token ' + localStorage.getItem('token')
     }
   }
 )
 const result = await response.json()
 console.log(result)
 return result
 }

 async createUser(obj: IUser){
  const response = await fetch(
   'https://test-assignment.emphasoft.com/api/v1/users/', {
     method: 'post',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Token ' + localStorage.getItem('token')
     },
     body: JSON.stringify(obj) 
   }
 )
 return await response.json()
 }

 async editUser(id: number, obj: IUser){
  const response = await fetch(
   `https://test-assignment.emphasoft.com/api/v1/users/${id}`, {
     method: 'put',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Token ' + localStorage.getItem('token')
     },
     body: JSON.stringify(obj) 
   }
 )
 return await response.json()
 }
}

export const users = new Users()