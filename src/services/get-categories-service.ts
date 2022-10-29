import { Category } from '../models/category';

export async function getCategories(): Promise<Category[]> {
	try {
		const data = await fetch(
			'https://petgram-server-leidy-daza-leidydaza.vercel.app/categories'
		)
		const json = await data.json()
		return json as Category[]
	} catch (error) {
		console.error(error);
		return []
	}
}
