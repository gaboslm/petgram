import { useEffect, useState } from 'react'
import { Category } from '../../models/category'
import { getCategories } from '../../services/get-categories-service'
import { CategoryCard } from '../category-card'
import { CategoryList } from './category-list'
import { List, Item } from './styles'

export function ListOfCategories(): JSX.Element {
	const [categories, setCategories] = useState<Category[]>(CategoryList)

	useEffect(function () {
		getCategories()
			.then(data => setCategories(data))
			.catch(error => console.log(error))
	}, [])

	return (
		<List className='ListOfCategories'>
			{categories.map(({ name, cover: image, path }) => (
				<Item key={name}>
					<CategoryCard name={name} image={image} path={path} />
				</Item>
			))}
		</List>
	)
}
