/* eslint-disable @next/next/no-img-element */
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardItem, CardTitle } from '@/components/card'
import { Header } from '@/components/header'
import { Shell } from '@/components/shell'
import { ICard } from '@/types/card-type'

export default function Home() {
	const data: ICard = {
		id: 1,
		company: 'Photosnap',
		logo: '/images/photosnap.svg',
		new: true,
		featured: true,
		position: 'Senior Frontend Developer',
		role: 'Frontend',
		level: 'Senior',
		postedAt: '1d ago',
		contract: 'Full Time',
		location: 'USA Only',
		languages: ['HTML', 'CSS', 'JavaScript'],
		tools: []
	}

	return (
		<div className="w-full h-screen bg-cyan-50 font-[family-name:var(--font-league-spartan)]">
			<Header />
			<Shell className={'shell'}>
				<Card className="flex justify-between items-center">
					<CardItem className={''}>
						<CardHeader>
							<img src={data.logo} alt={data.company} />
						</CardHeader>
						<CardContent>
							<CardDescription>{data.company}</CardDescription>
							<CardTitle>{data.position}</CardTitle>
							<p>{data.postedAt}</p>
							<p>{data.contract}</p>
							<p>{data.location}</p>
						</CardContent>
					</CardItem>
					<CardFooter>
						<p>{data.role}</p>
						<p>{data.level}</p>
						<p>{data.tools}</p>
						{data.languages.map((l, i) => (
							<p key={i}>{l}</p>
						))}
					</CardFooter>
				</Card>
			</Shell>
		</div>
	)
}
