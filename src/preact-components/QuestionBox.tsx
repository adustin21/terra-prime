import { useState } from "preact/hooks";
import cs from "./QuestionBox.module.sass";

export interface Question {
	question: string;
	answer: string;
}
type Props = {
	question: Question
}

function QuestionBox({question}: Props) {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	return (
		<div className={`${cs.container} ${isOpen && cs.container_open}`}>
		<h3 className={cs.container__title}>{question.question}</h3>
		<button
		onClick={e=>setIsOpen(!isOpen)}
		className={cs.container__crossButton}/>
		<hr></hr>
		<p className={cs.container__text}>{question.answer}</p>
		</div>
	)
}

export default QuestionBox

