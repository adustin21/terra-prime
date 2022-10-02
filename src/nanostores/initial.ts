import { atom } from 'nanostores'

export type LoginFormState = boolean
export const loginFormState = atom<LoginFormState>(false)
