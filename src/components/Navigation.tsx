import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="flex justify-between items-center h-[50px] px-5 shadow-md text-white bg-gray-500">
            <h3 className="font-bold">Git search</h3>
            <span>
                <Link to="/">Home</Link>
                <Link className="ml-[1rem]" to="/favourites">Favourites</Link>
            </span>
        </nav>
    );
};

export default Navigation;