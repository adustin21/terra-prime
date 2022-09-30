import cs from "./Gallery.module.sass";

 export interface Movie {
	src: string;
	alt: string;
}
type Props = {
	movieList: Movie[]
}

function Gallery({movieList}: Props) {
	const moveCards = (e: any, payload: "start"|"end") => {
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
	return (
		<div className={cs.gallery}>
			<button
			onClick={e=>moveCards(e, 'start')}
			id={cs.gallery__button_left}
			className={cs.gallery__button}/>
			<div className={cs.gallery__cardsContainer}>
				{movieList.map(movie=>{
					return(
						<img
						{...movie}
						className={cs.gallery__card}/>
					)
				})}
			</div>
			<button
			onClick={e=>moveCards(e, 'end')}
			id={cs.gallery__button_right}
			className={cs.gallery__button}/>
		</div>
	)
}

export default Gallery
