import { useEffect, useState } from 'react'
import { ListOfCategories } from '../list-of-categories'
import { Logo } from '../logo'
import { Topbar, Container } from './styles'

export function TopBar(): JSX.Element {
	const [fixed, setFixed] = useState<boolean>(false)
	
	useEffect(function () {
		document.addEventListener('scroll', onScroll)
		return () => document.removeEventListener('scroll', onScroll)
	}, [fixed])

	function onScroll(e: any): void {
		const newFixed = window.scrollY > 0
		fixed !== newFixed && setFixed(newFixed)
	}

	return (
		<Topbar>
			<Container fixed={fixed} >
				<Logo />
				<ListOfCategories />
			</Container>
		</Topbar>
	)
}
