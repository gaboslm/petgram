import { Fragment } from 'react'
import { GlobalStyle } from './styles/global'
import { Logo } from './components/logo'
import { ListOfCategories } from './components/list-of-categories'
import { ListOfPhotoCards } from './components/list-of-photo-cards'

export function App(): JSX.Element {
	return (
		<Fragment>
			<GlobalStyle />
			<Logo />
			<ListOfCategories />
			<ListOfPhotoCards />
		</Fragment>
	)
}
