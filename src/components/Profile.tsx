import { useState, useEffect } from 'react'
import { getUser } from '@utils/DataBaseClient.ts'

export default function Profile() {
	const [status, setStatus] = useState({ error: '', success: false, isLoading: false, name: '', surname: '', userEmail: '' })

	useEffect(() => {
		async function getUserData() {
			let email = window.localStorage.getItem('user')
			if (email) {
				let data = await getUser(email!)
				setStatus({ error: '', success: true, isLoading: false, name: data?.name!, surname: data?.surname!, userEmail: data?.email! })
			}
		}

		getUserData()
	}, [])

	const handleLogOut = () => {
		window.localStorage.removeItem('token')
		window.localStorage.removeItem('user')
		window.location.href = '/auth/login'
	}

	return (
		<>
			<button type="button" className="flex mx-3 text-sm md:mr-0" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
				<span className="sr-only">Open user menu</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-6 h-6 rounded-xl fill-gray-500 dark:fill-gray-400"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path fillRule="evenodd" d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-7 9a7 7 0 1 1 14 0H3z" clipRule="evenodd" />
				</svg>
			</button>
			<div
				className="hidden z-50 my-4 w-56 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
				id="dropdown"
			>
				<div className="py-3 px-4">
					<span className="block text-sm font-semibold text-gray-900 dark:text-white">
						{status.name} {status.surname}
					</span>
					<span className="block text-sm text-gray-900 truncate dark:text-white">{status.userEmail}</span>
				</div>
				<ul className="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">
					<li>
						<a
							href="#"
							id="logOut"
							onClick={handleLogOut}
							className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
						>
							Sign out
						</a>
					</li>
				</ul>
			</div>
		</>
	)
}
