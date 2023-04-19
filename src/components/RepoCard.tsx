import React from 'react'
import { IRepo } from '../models/models'
import { useActions } from '../Hooks/actions'

const RepoCard = ({ repo }: { repo: IRepo }) => {

	const {addFavourite} = useActions()

	const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		addFavourite(repo.url)
	}

	return (
		<div className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all'>
			<a href={repo.html_url} target='_blank'>
				<h2 className='text-large font-bold'>{repo.full_name}</h2>
				<p className='text-sm'>
					Forks: <span className='font-bold mr-2'>{repo.forks}</span>
					Watchers: <span className='font-bold mr-2'>{repo.watchers}</span>
				</p>
				<p className='text-sm font-thin'>{repo?.description}</p>
				<button 
					onClick={addToFavourite}
					className='py-2 px-3 bg-yellow-400 rounded hover:shadow-md transition-all mt-2 text-xs font-thin'>
					To favorites
				</button>
			</a>
		</div>
	)
}

export default RepoCard