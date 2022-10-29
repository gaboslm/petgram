import { Fragment } from 'react'
import { GlobalStyle } from './styles/global'
import { ListOfPhotoCards } from './components/list-of-photo-cards'
import { TopBar } from './components/topbar'

export function App(): JSX.Element {
	return (
		<Fragment>
			<GlobalStyle />
			<TopBar />
			<ListOfPhotoCards />
		</Fragment>
	)
}
