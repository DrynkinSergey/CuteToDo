import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

export const FetchLoader = () => {
	return (
		<div className='flex justify-center py-4'>
			<ThreeDots
				height='80'
				width='80'
				radius='9'
				color='#990b8d'
				ariaLabel='three-dots-loading'
				wrapperStyle={{}}
				wrapperClass=''
				visible={true}
			/>
		</div>
	)
}
