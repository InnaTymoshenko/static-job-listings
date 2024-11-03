import React from 'react'
import { IFilterCard } from '@/types/card-type'
import { Button } from './button'

type JobFilterProps = {
	filter: IFilterCard
	removeFilter: (type: keyof IFilterCard, value: string) => void
	handleClearFilter: () => void
}

export const JobFilter = ({ filter, removeFilter, handleClearFilter }: JobFilterProps) => {
	return (
		<div className="w-full absolute lg:top-[-5rem] sx:top-[-6rem] flex justify-between items-center gap-8 bg-white rounded-sm shadow-sm px-8 py-6">
			<div className="flex flex-wrap justify-start items-center lg:gap-4 sx:gap-2">
				{filter.role && (
					<div className="flex flex-wrap justify-start items-center gap-4">
						<span className="text-cyan-200 p-2 text-lg font-semibold">{filter.role}</span>
						<Button onClick={() => removeFilter('role', filter.role)} />
					</div>
				)}
				{filter.level && (
					<div className=" min-w-6 h-6 flex justify-between items-center gap-2 bg-cyan-50 border-none rounded-sm  overflow-hidden">
						<span className="text-cyan-200 p-2 text-lg font-semibold">{filter.level}</span>
						<Button onClick={() => removeFilter('level', filter.level)} />
					</div>
				)}
				{filter.languages &&
					filter.languages.map((l, i) => (
						<div
							key={`${l + i}`}
							className=" min-w-6 h-6 flex justify-between items-center gap-2 bg-cyan-50 border-none rounded-sm  overflow-hidden"
						>
							<span className="text-cyan-200 p-2 text-lg font-semibold">{l}</span>
							<Button onClick={() => removeFilter('languages', l)} />
						</div>
					))}
				{filter.tools &&
					filter.tools?.map((t, i) => (
						<div
							key={`${t + i}`}
							className=" min-w-6 h-6 flex justify-between items-center gap-2 bg-cyan-50 border-none rounded-sm  overflow-hidden"
						>
							<span className="text-cyan-200 p-2 text-lg font-semibold">{t}</span>
							<Button onClick={() => removeFilter('tools', t)} />
						</div>
					))}
			</div>
			<button className="text-cyan-200 hover:underline" onClick={handleClearFilter}>
				Clear
			</button>
		</div>
	)
}
