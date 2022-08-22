import { Anchor, Image, Paragraph } from './styles'

const DEFAULT_IMAGE = '/imgs/cat.jpg'

interface Props {
	name: string
	image?: string
	path: string
}

export function Category({
	name = '',
	image = DEFAULT_IMAGE,
	path = '',
}: Props): JSX.Element {
	function goToCategory(): void {
		console.log(path)
	}
	return (
		<Anchor className='Category' onClick={goToCategory}>
			<Image src={image} alt={name} />
			<Paragraph>{name}</Paragraph>
		</Anchor>
	)
}
