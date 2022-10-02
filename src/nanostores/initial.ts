import { atom } from 'nanostores'

export type LoginFormState = boolean
export const loginFormState = atom<LoginFormState>(false)

export type ErrorPopupState = boolean
export const errorPopupState = atom<ErrorPopupState>(true)
