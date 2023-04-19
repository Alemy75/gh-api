import './App.css'
import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import Navigation from './components/Navigation';

function App() {
    return (
        <React.Fragment>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Favourites" element={<FavoritesPage />} />
            </Routes>
        </React.Fragment>
    )
}

export default App
