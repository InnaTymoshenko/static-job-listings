'use client'

import Image from 'next/image'
import { Badge } from '@/components/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardItem, CardTitle } from '@/components/card'
import { Header } from '@/components/header'
import { Shell } from '@/components/shell'
import { ICard } from '@/types/card-type'
import fakeData from '@/data.json'
import { useEffect, useState } from 'react'

export default function Home() {
	const [datas, setDatas] = useState<ICard[]>()

	useEffect(() => {
		setDatas(fakeData as ICard[])
	}, [])

	// const data: ICard = {
	// 	id: 1,
	// 	company: 'Photosnap',
	// 	logo: '/images/photosnap.svg',
	// 	new: true,
	// 	featured: true,
	// 	position: 'Senior Frontend Developer',
	// 	role: 'Frontend',
	// 	level: 'Senior',
	// 	postedAt: '1d ago',
	// 	contract: 'Full Time',
	// 	location: 'USA Only',
	// 	languages: ['HTML', 'CSS', 'JavaScript'],
	// 	tools: []
	// }

	return (
		<div className="w-full h-screen bg-cyan-50 font-[family-name:var(--font-league-spartan)]">
			<Header />
			<Shell className={'shell'}>
				{datas?.map((data, index) => (
					<Card
						key={index}
						className={`flex justify-between items-center bg-white px-6 py-3 border-l-[6px]  ${
							data.featured ? 'border-l-cyan-200' : 'border-transparent'
						}`}
					>
						<CardItem className={'w-[50%] flex justify-start items-center gap-4'}>
							<CardHeader>
								<Image src={data.logo} alt={data.company} width={100} height={100} />
							</CardHeader>
							<CardContent>
								<div className="flex justify-start items-center gap-4 text-xl">
									<CardDescription>{data.company}</CardDescription>
									{data.new && (
										<Badge className={'px-2 pt-0.5 gap-1 text-lg text-white bg-cyan-200 rounded-full'}>{`NEW!`}</Badge>
									)}
									{data.featured && (
										<Badge
											className={'px-2 pt-0.5 gap-1 text-lg text-white bg-cyan-300 rounded-full'}
										>{`FEATURED`}</Badge>
									)}
								</div>

								<CardTitle>{data.position}</CardTitle>
								<div className="flex justify-start items-center gap-4 text-xl">
									<span>{data.postedAt}</span>
									<Badge className={'w-1 h-1 bg-cyan-100 rounded-full'} />
									<span>{data.contract}</span>
									<Badge className={'w-1 h-1 bg-cyan-100 rounded-full'} />
									<span>{data.location}</span>
								</div>
							</CardContent>
						</CardItem>
						<CardFooter className="">
							<span className="tools">{data.role}</span>
							<span className="tools">{data.level}</span>
							{data.tools.length ? <span className="tools">{data.tools}</span> : null}

							{data.languages.map(l => (
								<span className="tools" key={l}>
									{l}
								</span>
							))}
						</CardFooter>
					</Card>
				))}
			</Shell>
		</div>
	)
}
