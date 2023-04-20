import React from 'react';
import { useAppSelector, } from '../Hooks/redux';
import { useActions } from '../Hooks/actions';

const FavoritesPage = () => {
    const { favourites } = useAppSelector(state => state.github)
    const { removeFavourite } = useActions()

    if (favourites.length === 0) return <p>No items in favourites...</p>

    return (
        <div className='mx-auto w-[700px]'>
            <ul className='mt-2'>
                {
                    favourites.map(f =>
                        <li className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all max-w-[700px] flex justify-between' key={f}>
                            <a href={f}>{f}</a>
                            <button onClick={(e) => {
                                e.preventDefault()
                                removeFavourite(f)
                            }} className='py-2 px-4 border '>Del</button>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default FavoritesPage;