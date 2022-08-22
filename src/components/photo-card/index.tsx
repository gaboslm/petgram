import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

interface Props {
	id?: number
	image: string
	likes: number
}

const DEFAULT_IMAGE = '/imgs/cat.jpg'

export function PhotoCard({
	id = 0,
	image = DEFAULT_IMAGE,
	likes = 0,
}: Props): JSX.Element {
	return (
		<Article>
			<a href={`/detail/${id}`}>
				<ImgWrapper>
					<Img src={image} alt={image} />
				</ImgWrapper>
			</a>

			<Button>
				<MdFavoriteBorder size={20} />
				{likes} Likes!
			</Button>
		</Article>
	)
}
