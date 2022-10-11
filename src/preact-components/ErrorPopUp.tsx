import cs from "./ErrorPopUp.module.sass";
import { useStore } from "@nanostores/preact";
import { errorPopupState } from "../nanostores/initial";

type Props = {}

function LoginForm({}: Props) {
	const windowIsOpen = useStore(errorPopupState)
	const closeWindow = (e: any) => {
		const target = e.target as HTMLElement
		if (!target) return ;
		if (target.className === cs.container ||
			target.className === cs.container__button_close){
				errorPopupState.set(false)
		}
	}

	if(!windowIsOpen) return null;
	return(
		<div className={cs.container} onClick={closeWindow}>
		<div className={cs.container__box}>
			<h2 className={cs.container__title}>
				Gift voucher purchase is not available at this time.
				<br/>
				Please try again later.
			</h2>
			<button type="reset"
			className={cs.container__button_close}>close window</button>
		</div>
		</div>
	)
}

export default LoginForm
