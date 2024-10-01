import React from 'react'
import Header from './Header'
import Footer from './Footer'
import useHeaderHeight from './hooks/useHeaderHeight'

const MainContainer = ({ children }) => {
	const navHeight = useHeaderHeight();
	return (
		<div className="min-h-screen w-screen text-black overflow-x-hidden">
			<div className='bg-[#F1F1F1] fixed left-0 top-0 h-screen w-screen z-[-2]' />
			<Header />
			<div className='z-[-1]'>
				<div className='flex flex-col w-full min-h-screen text-6xl px-[10%]' style={{ paddingTop: navHeight }}>
					{children}
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default MainContainer
