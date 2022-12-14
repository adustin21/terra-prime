import cs from "./LoginForm.module.sass";
import { useState } from "preact/hooks";
import { useStore } from "@nanostores/preact";
import { loginFormState } from "../nanostores/initial";

type SignMode = "in" | "up"
type SignInData = { login: string, password: string }
const inititalSignInData: SignInData = { login: "", password: "" }
type Props = {}

function LoginForm({}: Props) {
	const windowIsOpen = useStore(loginFormState)
	const [signMode, setSignMode] = useState<SignMode>("in")
	const [wrongAccount, setWrongAccount] = useState<boolean>(false)
	const [wrongCountry, setWrongCountry] = useState<boolean>(false)
	const [signInData, setSignInData] = useState<SignInData>(inititalSignInData)
	const closeWindow = (e: any) => {
		const target = e.target as HTMLElement
		if (!target) return ;
		if (target.className === cs.container ||
			target.className === cs.button_close){
				loginFormState.set(false)
		}
	}
	if(!windowIsOpen) return null;
	switch (signMode) {
		case "in":
			return(
				<div className={cs.container} onClick={closeWindow}>
				<div className={cs.box}>
					<div className={cs.toggler}>
						<h2>sign-in</h2>
						<button onClick={e=>{setSignMode("up")}}>
							sign-up
						</button>
					</div>
					<form className={cs.form}
					onSubmit={e=>{e.preventDefault();setWrongAccount(true)}}>
					<span>{wrongAccount?"Sorry, we can’t find your account":""}</span>
					<input required type="text" placeholder="Login" name="login"
					value={signInData.login}
					onChange={(e:any)=>setSignInData({...signInData, login: e.target.value})}/>
					<input required type="password" placeholder="Password" name="password"
					value={signInData.password}
					onChange={(e:any)=>setSignInData({...signInData, password: e.target.value})}/>
					<button type="reset"
					className={cs.button_close}>cancel</button>
					<button type="submit">submit</button>
					</form>
				</div>
				</div>
			)
		case "up":
			return(
				<div className={cs.container}onClick={closeWindow}>
				<div className={cs.box}>
					<div className={cs.toggler}>
						<button onClick={e=>setSignMode("in")}>sign-in</button>
						<h2>sign-up</h2>
					</div>
					<form className={cs.form}>
					<span>
						{wrongCountry?"Sorry, terra prime is not available in your country":""}
					</span>
					<input
					onBlur={e=>setWrongCountry(true)}
					required type="text" placeholder="Country of residence"/>
					<input type="text" placeholder="Login" disabled/>
					<input type="text" placeholder="Password" disabled/>
					<button type="reset"
					className={cs.button_close}>cancel</button>
					<button type="submit" disabled>submit</button>
					</form>
				</div>
				</div>
			)
	}
}

export default LoginForm
