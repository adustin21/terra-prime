import { useStore } from "@nanostores/preact";
import { loginFormState } from "../nanostores/initial";
import cs from "./SignInButton.module.sass";

type Props = {}

function SubscribeButton({}: Props) {
	const isLoginFormOpen = useStore(loginFormState)
	return (
		<button
		className={cs.container}
		onClick={e=>loginFormState.set(!isLoginFormOpen)}>
			<span>sign in</span>
		</button>
	)
}

export default SubscribeButton
