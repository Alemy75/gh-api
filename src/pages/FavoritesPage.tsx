import React from 'react';
import { useAppSelector } from '../Hooks/redux';

const FavoritesPage = () => {
    const {favourites} = useAppSelector(state => state.github)

    if (favourites.length === 0) return <p>No items in favourites...</p>

    return (
        <ul className='mt-2'>
            {
                favourites.map(f => 
                    <li className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all max-w-[500px]' key={f}>
                        <a href={f}>{f}</a>
                    </li>
                )
            }
        </ul>
    );
};

export default FavoritesPage;