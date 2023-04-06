import { TodoList } from './components/todoList'
import { AddForm } from './components/AddForm'
import bg from './assets/images/bg-desktop-dark.jpg'
export const App = () => {
	return (
		<div className=' bg-darkVeryBG min-h-screen px-6 text-lg'>
			<img className='fixed w-full left-0 z-1' src={bg} alt='bgImage' />
			<div className='relative z-2 flex w-2/3 md:w-2/6 flex-col mx-auto py-40 '>
				<span className='font-extrabold mb-8 text-2xl text-white/80'>
					TODO:
				</span>
				<AddForm />
				<TodoList />
			</div>
		</div>
	)
}
