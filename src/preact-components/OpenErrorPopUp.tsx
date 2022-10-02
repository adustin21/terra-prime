import { useStore } from "@nanostores/preact";
import type { WritableAtom } from "nanostores"
import { errorPopupState } from "../nanostores/initial";

type Props  = {
	children: any
}

function OpenErrorPopup({children}: Props) {
	useStore(errorPopupState);
	return (
		<div onClick={e=>errorPopupState.set(true)}>
			{children}
		</div>
	)
}

export default OpenErrorPopup
