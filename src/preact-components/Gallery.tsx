import { moveCards } from "../features/moveCards";
import cs from "./Gallery.module.sass";

 export interface Movie {
	src: string;
	alt: string;
}
type Props = {
	movieList: Movie[]
}

function Gallery({movieList}: Props) {
	return (
		<div className={cs.gallery}>
			<button
			aria-label="Scroll to the left."
			onClick={e=>moveCards(e, 'start')}
			id={cs.gallery__button_left}
			className={cs.gallery__button}/>
			<div className={cs.gallery__cardsContainer}>
				{movieList.map(movie=>{
					return <img {...movie} className={cs.gallery__card}/>
				})}
			</div>
			<button
			aria-label="Scroll to the right."
			onClick={e=>moveCards(e, 'end')}
			id={cs.gallery__button_right}
			className={cs.gallery__button}/>
		</div>
	)
}

export default Gallery
