/**
 * Scrolls cs.gallery__cardsContainer.
 * @param e The "click" event of the gallery scroll button.
 * @param payload Scroll mode.
 */
export const moveCards = (e: any, payload: "start"|"end") => {
	const cardsContainerElement =
		e.target?.parentElement?.childNodes?.[1] as HTMLDivElement
	if (!cardsContainerElement) return ;
	const cardsContainerWidth = cardsContainerElement.offsetWidth
	switch (payload) {
		case "end":
			const lastCard =
				cardsContainerElement.lastChild as HTMLDivElement
			cardsContainerElement.scrollTo({left: cardsContainerWidth})
			break ;
		case "start":
			cardsContainerElement.scrollTo({left: 0})
			break ;
		default:
			break;
	}
}
