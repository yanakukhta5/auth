export type IAuth = {
 username: string,
 password: string,
}

type UserCreation = {
 is_active: boolean,
 first_name: string,
 last_name: string,
 id?: number
}

export type IUser = IAuth & UserCreation