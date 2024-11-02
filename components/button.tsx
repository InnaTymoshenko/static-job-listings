'use client'

import React, { forwardRef } from 'react'
import { IconRemove } from './icons/icon-remove'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode
	className?: string
	removeFilter: () => void
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ removeFilter, ...props }, ref) {
	return (
		<button
			ref={ref}
			className="w-6 h-6 bg-cyan-200 flex justify-center items-center cursor-pointer hover:bg-cyan-300"
			onClick={removeFilter}
			{...props}
		>
			<IconRemove />
		</button>
	)
})
Button.displayName = 'Button'

export { Button }
