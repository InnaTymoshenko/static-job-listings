import React, { forwardRef } from 'react'

export interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
	as?: React.ElementType
	className: string
	children?: React.ReactNode
}

export const Shell = forwardRef<HTMLDivElement, ShellProps>(({ className, children, ...props }, ref) => {
	return (
		<div ref={ref} className={className} {...props}>
			{children}
		</div>
	)
})

Shell.displayName = 'Shell'
