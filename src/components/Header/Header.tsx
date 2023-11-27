import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { selectUser } from '../../redux/Auth/selectors'
import { logoutThunk } from '../../redux/Auth/operations'

export const Header = () => {
	const { name } = useAppSelector(selectUser)
	const dispatch = useAppDispatch()
	return (
		<header className='bg-darkMain text-white font-bold z-[233] py-4 px-4 sticky top-0 flex justify-between items-center'>
			<div>{name}</div>

			<button onClick={() => dispatch(logoutThunk())} className=''>
				Exit
			</button>
		</header>
	)
}
