import { useStore } from "@nanostores/preact";
import { loginFormState } from "../nanostores/initial";
import cs from "./SubscribeButton.module.sass";

type Props = {
	text: string
}

function SubscribeButton({text}: Props) {
	const isLoginFormOpen = useStore(loginFormState)

	return (
		<button
		className={cs.container}
		onClick={e=>loginFormState.set(!isLoginFormOpen)}>
			<span>{text}</span>
		</button>
	)
}

export default SubscribeButton
