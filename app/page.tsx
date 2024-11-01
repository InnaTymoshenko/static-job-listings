'use client'

import Image from 'next/image'
import { Badge } from '@/components/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardItem, CardTitle } from '@/components/card'
import { Header } from '@/components/header'
import { Shell } from '@/components/shell'
import { ICard, IFilterCard } from '@/types/card-type'
import fakeData from '@/data.json'
import { MouseEvent, useCallback, useEffect, useState } from 'react'
import { IconRemove } from '@/components/icons/icon-remove'

export default function Home() {
	const [datas, setDatas] = useState<ICard[]>()
	const [isFilterFilled, setIsFilterFilled] = useState(false)
	const [filter, setFilter] = useState<IFilterCard>({
		role: '',
		level: '',
		tools: [],
		languages: []
	})

	const filterFilled = useCallback(() => {
		return filter.role !== '' || filter.level !== '' || filter.tools.length > 0 || filter.languages.length > 0
	}, [filter.languages.length, filter.level, filter.role, filter.tools.length])

	useEffect(() => {
		setDatas(fakeData as ICard[])
	}, [])

	const handleRole = (e: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>) => {
		const role = e.currentTarget.textContent
		if (role && datas) {
			const filterRole = datas.filter(d => d.role.toLowerCase() === role.toLowerCase())
			setDatas(filterRole)
			setFilter(prev => {
				return {
					...prev,
					role: role
				}
			})
		}
	}
	const handleLevel = (e: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>) => {
		const level = e.currentTarget.textContent
		if (level && datas) {
			const filterLevel = datas.filter(d => d.level.toLowerCase() === level.toLowerCase())
			setDatas(filterLevel)
			setFilter(prev => {
				return {
					...prev,
					level: level
				}
			})
		}
	}

	const handleTools = (e: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>) => {
		const tool = e.currentTarget.textContent
		if (tool && datas) {
			const filterTool = datas.filter(d => d.tools && d.tools.includes(tool))
			setDatas(filterTool)
			setFilter(prev => {
				return {
					...prev,
					tools: [...prev.tools, tool]
				}
			})
		}
	}
	const handleLanguages = (e: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>) => {
		const language = e.currentTarget.textContent
		if (language && datas) {
			const filterLanguage = datas?.filter(d => d.languages && d.languages.includes(language))
			setDatas(filterLanguage)
			setFilter(prev => {
				return {
					...prev,
					languages: [...prev.languages, language]
				}
			})
		}
	}

	useEffect(() => {
		if (filterFilled()) {
			setIsFilterFilled(true)
		} else {
			setIsFilterFilled(false)
		}
	}, [filterFilled])

	const handleClearFilter = () => {
		setIsFilterFilled(false)
		setFilter({
			role: '',
			level: '',
			tools: [],
			languages: []
		})
	}

	return (
		<div className="w-full h-screen bg-cyan-50 font-[family-name:var(--font-league-spartan)]">
			<Header />
			<Shell className={'shell'}>
				<div className="w-full min-h-8 relative">
					{isFilterFilled ? (
						<div className="w-full absolute lg:top-[-5rem] sx:top-[-6rem] flex justify-between items-center gap-8 bg-white rounded-sm shadow-sm px-8 py-6">
							<div className="flex flex-wrap justify-start items-center lg:gap-4 sx:gap-2">
								{filter.role && (
									<div className="flex flex-wrap justify-start items-center gap-4">
										<span className="text-cyan-200 p-2 text-lg font-semibold">{filter.role}</span>
										<button className="w-6 h-6 bg-cyan-200 flex justify-center items-center cursor-pointer hover:bg-cyan-300">
											<IconRemove />
										</button>
									</div>
								)}
								{filter.level && (
									<div className=" min-w-6 h-6 flex justify-between items-center gap-2 bg-cyan-50 border-none rounded-sm  overflow-hidden">
										<span className="text-cyan-200 p-2 text-lg font-semibold">{filter.level}</span>
										<button className="w-6 h-6 bg-cyan-200 flex justify-center items-center cursor-pointer hover:bg-cyan-300">
											<IconRemove />
										</button>
									</div>
								)}
								{filter.tools &&
									filter.tools?.map((t, i) => (
										<div
											key={`${t + i}`}
											className=" min-w-6 h-6 flex justify-between items-center gap-2 bg-cyan-50 border-none rounded-sm  overflow-hidden"
										>
											<span className="text-cyan-200 p-2 text-lg font-semibold">{t}</span>
											<button className="w-6 h-6 bg-cyan-200 flex justify-center items-center cursor-pointer hover:bg-cyan-300">
												<IconRemove />
											</button>
										</div>
									))}
								{filter.languages &&
									filter.languages.map((l, i) => (
										<div
											key={`${l + i}`}
											className=" min-w-6 h-6 flex justify-between items-center gap-2 bg-cyan-50 border-none rounded-sm  overflow-hidden"
										>
											<span className="text-cyan-200 p-2 text-lg font-semibold">{l}</span>
											<button className="w-6 h-6 bg-cyan-200 flex justify-center items-center cursor-pointer hover:bg-cyan-300">
												<IconRemove />
											</button>
										</div>
									))}
							</div>
							<button className="text-cyan-200 hover:underline" onClick={handleClearFilter}>
								Clear
							</button>
						</div>
					) : null}
				</div>

				<div
					className={`w-full relative flex flex-col justify-start lg:gap-8 sx:gap-16 lg:mt-6 ${
						isFilterFilled ? 'sx:mt-24' : 'sx:mt-12'
					}`}
				>
					{datas?.map((data, index) => (
						<Card
							key={index}
							className={`flex lg:flex-row sx:flex-col relative justify-between items-center bg-white px-6 py-3 border-l-[6px]  ${
								data.featured ? 'border-l-cyan-200' : 'border-transparent'
							}`}
						>
							<CardItem
								className={
									'lg:w-[50%] sx:w-full border-b-2 lg:border-b-transparent sx:border-b-cyan-100 flex justify-start items-center gap-4'
								}
							>
								<CardHeader className="lg:static sx:absolute top-[-10%]">
									<Image src={data.logo} alt={data.company} width={100} height={100} />
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
								<span className="tools" onClick={e => handleRole(e)}>
									{data.role}
								</span>
								<span className="tools" onClick={e => handleLevel(e)}>
									{data.level}
								</span>
								{data.tools?.map(t => (
									<span key={t} className="tools" onClick={e => handleTools(e)}>
										{t}
									</span>
								))}
								{data.languages.map(l => (
									<span className="tools" key={l} onClick={e => handleLanguages(e)}>
										{l}
									</span>
								))}
							</CardFooter>
						</Card>
					))}
				</div>
			</Shell>
		</div>
	)
}
