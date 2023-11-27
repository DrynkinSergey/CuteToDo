import React from 'react'
import { useForm } from 'react-hook-form'
import { useAppDispatch } from '../redux/store'
import { Link } from 'react-router-dom'
import { registerThunk } from '../redux/Auth/operations'
export const Register = () => {
	const { register, handleSubmit } = useForm()
	const dispatch = useAppDispatch()
	const submit = data => {
		//@ts-ignore
		dispatch(registerThunk(data))
	}
	return (
		<div className='bg-darkMain min-h-screen grid place-content-center'>
			<form className='flex flex-col gap-4 px-4 py-4 border-2 border-white rounded-md ' onSubmit={handleSubmit(submit)}>
				<input placeholder='name...' className='border-2 border-black p-2' {...register('name')} />
				<input placeholder='email...' className='border-2 border-black p-2' {...register('email')} />
				<input placeholder='password...' className='border-2 border-black p-2' {...register('password')} />
				<button className='border-2 bg-white hover:bg-blue-700 hover:text-white transition border-black p-2'>
					Register
				</button>
				<span className='text-white'>
					You already have account?{' '}
					<Link className='underline text-teal-600' to='/login'>
						Log IN!
					</Link>
				</span>
			</form>
		</div>
	)
}
