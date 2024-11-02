import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardItem, CardTitle } from './card'
import { Badge } from './badge'
import { ICard, IFilterCard } from '@/types/card-type'

type JobCardProps = {
	data: ICard
	addFilter: (type: keyof IFilterCard, e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
}

export const JobCard = ({ data, addFilter }: JobCardProps) => {
	return (
		<Card
			className={`flex lg:flex-row sx:flex-col relative justify-between items-center bg-white px-6 py-2 border-l-[6px]  ${
				data.featured ? 'border-l-cyan-200' : 'border-transparent'
			}`}
		>
			<CardItem
				className={
					'lg:w-[50%] sx:w-full border-b-2 lg:border-b-transparent sx:border-b-cyan-100 flex justify-start items-center gap-4'
				}
			>
				<CardHeader className="lg:static sx:absolute top-[-10%]">
					<Image src={data.logo} alt={data.company} priority width={100} height={100} />
				</CardHeader>
				<CardContent>
					<div className="flex justify-start items-center gap-4 text-xl">
						<CardDescription>{data.company}</CardDescription>
						{data.new && (
							<Badge
								className={'px-2 pt-0.5 gap-1 text-lg font-semibold text-white bg-cyan-200 rounded-full'}
							>{`NEW!`}</Badge>
						)}
						{data.featured && (
							<Badge
								className={'px-2 pt-0.5 gap-1 text-lg font-semibold text-white bg-cyan-300 rounded-full'}
							>{`FEATURED`}</Badge>
						)}
					</div>

					<CardTitle>{data.position}</CardTitle>
					<div className="flex justify-start items-center gap-4 lg:text-xl sx:text-lg">
						<span>{data.postedAt}</span>
						<Badge className={'w-1 h-1 bg-cyan-100 rounded-full'} />
						<span>{data.contract}</span>
						<Badge className={'w-1 h-1 bg-cyan-100 rounded-full'} />
						<span>{data.location}</span>
					</div>
				</CardContent>
			</CardItem>
			<CardFooter className="">
				<span className="tools" onClick={e => addFilter('role', e)}>
					{data.role}
				</span>
				<span className="tools" onClick={e => addFilter('level', e)}>
					{data.level}
				</span>
				{data.languages?.map(l => (
					<span className="tools" key={l} onClick={e => addFilter('languages', e)}>
						{l}
					</span>
				))}
				{data.tools?.map(t => (
					<span key={t} className="tools" onClick={e => addFilter('tools', e)}>
						{t}
					</span>
				))}
			</CardFooter>
		</Card>
	)
}
