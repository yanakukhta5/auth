export type IAuth = {
 username: string,
 password: string,
}

type UserCreation = {
 is_active: boolean | string,
 first_name: string,
 last_name: string,
 id?: number | string
}

export type IUser = IAuth & UserCreation