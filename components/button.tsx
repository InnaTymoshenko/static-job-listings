'use client'

import React, { forwardRef } from 'react'
import { IconRemove } from './icons/icon-remove'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode
	className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ ...props }, ref) {
	return (
		<button
			ref={ref}
			className="w-6 h-6 bg-cyan-200 flex justify-center items-center cursor-pointer hover:bg-cyan-300"
			{...props}
		>
			<IconRemove />
		</button>
	)
})
Button.displayName = 'Button'

export { Button }
