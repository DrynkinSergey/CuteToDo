import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'

export const Loader = () => {
	return (
		<div className='min-h-screen bg-darkVeryBG grid place-content-center '>
			<ThreeCircles
				height='150'
				width='150'
				color='#510156'
				wrapperStyle={{}}
				wrapperClass=''
				visible={true}
				ariaLabel='three-circles-rotating'
				outerCircleColor='#060d63'
				innerCircleColor='#d609e5'
				middleCircleColor='#ff087f'
			/>
		</div>
	)
}
