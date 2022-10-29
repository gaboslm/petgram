import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { useEffect, useState } from 'react'

interface Props {
	id?: number
	image: string
	likes: number
}

const DEFAULT_IMAGE = '/imgs/cat.jpg'

export function PhotoCard({ id = 0, image = DEFAULT_IMAGE, likes = 0 }: Props): JSX.Element {
	const [liked, setLiked] = useState(false)
	const [likedAnimation, setlikedAnimation] = useState(false)
	const [likeCount, setLikeCount] = useState(likes)

	function handleDoubleClick(): void {
		setlikedAnimation(true)
		setTimeout(() => setlikedAnimation(false), 2000)

		setLiked(true)
		setLikeCount(likes + 1)
	}

	function handleClick(): void {
		setLiked(!liked)
		const likeCounter = liked ? likes : likes + 1
		setLikeCount(likeCounter)
	}

	const icon = liked ? (
		<MdFavorite size={20} onClick={handleClick}></MdFavorite>
	) : (
		<MdFavoriteBorder size={20} onClick={handleClick}></MdFavoriteBorder>
	)

	return (
		<Article>
			{/* <a href={`/detail/${id}`}> */}
			<ImgWrapper>
				<Img src={image} alt={image} onDoubleClick={handleDoubleClick} />
				<MdFavorite
					size={50}
					className={likedAnimation ? 'interaction' : ''}
					color='white'
				/>
			</ImgWrapper>
			{/* </a> */}

			<Button>
				{icon}
				{likeCount} Likes!
			</Button>
		</Article>
	)
}
