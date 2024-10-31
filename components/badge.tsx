import React from 'react'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
	as?: React.ElementType
	className: string
}

export const Badge = ({ className, ...props }: BadgeProps) => {
	return <div className={className} {...props} />
}
