export interface ICard {
	id: number
	company: string
	logo: string
	new: boolean
	featured: boolean
	position: string
	role: string
	level: string
	postedAt: string
	contract: string
	location: string
	languages: string[]
	tools: string[]
}

export interface IFilterCard {
	role: string
	level: string
	tools: string[]
	languages: string[]
}
