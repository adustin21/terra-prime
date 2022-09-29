import cs from "./SubscribeButton.module.sass";

type Props = {
	text: string
}

function SubscribeButton({text}: Props) {
  return (
	<button className={cs.container}><span>{text}</span></button>
  )
}

export default SubscribeButton
