import { makeObservable, observable, action } from "mobx"

class Auth {
 authorized = false
 
 constructor(){
  makeObservable(this, {
   authorized: observable,
   authUser: action
  })
 }
 async authUser(){
  const response = await fetch('http://127.0.0.1:1234/api/v1/login', {
   method: 'post',
   headers: {
    'Content-Type': 'application/json'
   },
   body: JSON.stringify( {
    username: 'test_super',
    password: 'Nf<U4f<rDbtDxAPn'
   })
  })
  const result = await response.json()
  console.log(result)
  localStorage.setItem('token', result)
 }
}

export const auth = new Auth()