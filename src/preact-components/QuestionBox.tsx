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
			<h3 className={cs.title}
			onClick={e=>setIsOpen(!isOpen)}>
				{question.question}
			</h3>
			<button
			aria-label={isOpen ? "See answer" : "Hide answer"}
			onClick={e=>setIsOpen(!isOpen)}
			className={cs.crossButton}/>
			<hr className={cs.space}/>
			<p className={cs.text}>{question.answer}</p>
		</div>
	)
}

export default QuestionBox

