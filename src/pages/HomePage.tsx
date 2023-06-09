import React, { useEffect, useState } from 'react';
import { useLazyGetUserReposQuery, useSearchUsersQuery } from '../store/github/github.api';
import { useDebounce } from '../Hooks/debounce';
import RepoCard from '../components/RepoCard';

const HomePage = () => {

    const [search, setSearch] = useState('Alemy75')
    const [dropdown, setDropdown] = useState(false)

    const debounced = useDebounce(search)
    const { data, isError, isLoading} = useSearchUsersQuery(debounced, {
        skip: debounced.length < 3,
        refetchOnFocus: true
    })

    const [fetchRepos, { isLoading: areReposLoading, data: repos}] = useLazyGetUserReposQuery()

    useEffect(() => {
        setDropdown(debounced.length > 3 && data?.length! > 0)
    }, [debounced, data])

    const clickHandelr = (username: string) => {
        fetchRepos(username)
        setDropdown(false)
    }

    return (
        <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
            {isError && <p className='text-center text-red-400'>Something went wrong</p>}

            <div className='relative w-[560px]'>
                <input
                    className='border py-2 px-4 w-full h-[42px] mb-2'
                    type="text"
                    placeholder='Search for Github username....'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onClick={() => setDropdown(true)}
                />
                
                {dropdown && <ul className='overflow-y-scroll list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white'>
                    {isLoading && <p>Loading...</p>}
                    {data?.map(user => (
                        <li className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer' key={user.id}
                            onClick={() => clickHandelr(user.login)}
                        >
                            {user.login}
                        </li>
                    ))}
                </ul>}

                <div className='container'>
                    {dropdown && <div className='container mt-[200px] transition-all'></div>}
                    {areReposLoading && <p className='text-center'>Loading repos...</p>}
                    {repos?.map(repo => <RepoCard repo={repo} key={repo.id}/>)}
                </div>
            </div>
        </div>
    );
};

export default HomePage;