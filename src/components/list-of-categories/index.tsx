import { Category } from '../category'
import { CategoryList } from './category-list'
import { List, Item } from './styles'

export function ListOfCategories(): JSX.Element {
	return (
		<List className='ListOfCategories'>
			{CategoryList.map(({ name, image, path }) => (
				<Item key={name}>
					<Category name={name} image={image} path={path} />
				</Item>
			))}
		</List>
	)
}
