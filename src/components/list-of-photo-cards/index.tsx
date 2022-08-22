import { Photos } from './photo-card-list'
import { PhotoCard } from '../photo-card'

export function ListOfPhotoCards(): JSX.Element {
	return (
		<ul className='PhotoCardList'>
			{Photos.map(({ id, image, likes }) => (
				<li key={id}>
					<PhotoCard id={id} image={image} likes={likes} />
				</li>
			))}
		</ul>
	)
}
