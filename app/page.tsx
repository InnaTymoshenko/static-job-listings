'use client'

import { MouseEvent, useCallback, useEffect, useState } from 'react'
import { Header } from '@/components/header'
import { Shell } from '@/components/shell'
import { JobCard } from '@/components/job-card'
import { JobFilter } from '@/components/job-filter'
import { ICard, IFilterCard } from '@/types/card-type'
import fakeData from '@/data.json'

export default function Home() {
	const [datas, setDatas] = useState<ICard[]>()
	const [isFilterFilled, setIsFilterFilled] = useState(false)
	const [filter, setFilter] = useState<IFilterCard>({
		role: '',
		level: '',
		tools: [],
		languages: []
	})

	useEffect(() => {
		setDatas(fakeData as ICard[])
	}, [])

	const filteredData = datas?.filter(job => {
		const roleMatch = filter.role ? job.role === filter.role : true
		const levelMatch = filter.level ? job.level === filter.level : true
		const toolsMatch = filter.tools.length ? filter.tools.every(tool => job.tools.includes(tool)) : true
		const languagesMatch = filter.languages.length
			? filter.languages.every(language => job.languages.includes(language))
			: true
		return roleMatch && levelMatch && toolsMatch && languagesMatch
	})

	const addFilter = (type: keyof IFilterCard, e: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>) => {
		const value = e.currentTarget.textContent || ''
		setFilter(prevFilter => {
			if (type === 'tools' || type === 'languages') {
				const updatedItems = prevFilter[type].includes(value) ? prevFilter[type] : [...prevFilter[type], value]
				return { ...prevFilter, [type]: updatedItems }
			}
			return { ...prevFilter, [type]: value }
		})
	}

	const removeFilter = (type: keyof IFilterCard, value: string) => {
		setFilter(prevFilter => {
			if (type === 'tools' || type === 'languages') {
				const updatedItems = prevFilter[type].filter(item => item !== value)
				return { ...prevFilter, [type]: [...updatedItems] }
			}
			return { ...prevFilter, [type]: '' }
		})
	}

	const filterFilled = useCallback(() => {
		return filter.role !== '' || filter.level !== '' || filter.tools.length > 0 || filter.languages.length > 0
	}, [filter.languages.length, filter.level, filter.role, filter.tools.length])

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
				<section className="w-full min-h-8 relative">
					{isFilterFilled ? (
						<JobFilter filter={filter} removeFilter={removeFilter} handleClearFilter={handleClearFilter} />
					) : null}
				</section>
				<section
					className={`w-full relative flex flex-col justify-start lg:gap-8 sx:gap-16 lg:mt-6 ${
						isFilterFilled ? 'sx:mt-24' : 'sx:mt-12'
					}`}
				>
					{filteredData?.map((data, index) => (
						<JobCard key={index} data={data} addFilter={addFilter} />
					))}
				</section>
			</Shell>
		</div>
	)
}
