/* eslint-disable @next/next/no-img-element */
'use client'

import { SCREEN_SIZES, useScreenSize } from '@/utils/hook'

export const Header = () => {
	const screenSize = useScreenSize()

	return (
		<header className="w-full  sx:h-40 bg-cyan-200 ">
			{screenSize === SCREEN_SIZES.MOBILE ? (
				<img
					src="/images/bg-header-mobile.svg"
					alt="bg-mobile"
					className="w-full h-full object-cover object-center mix-blend-lighten"
				/>
			) : (
				<img
					src="/images/bg-header-desktop.svg"
					alt="bg-desktop"
					className="w-full h-full object-cover object-center mix-blend-lighten"
				/>
			)}
		</header>
	)
}
