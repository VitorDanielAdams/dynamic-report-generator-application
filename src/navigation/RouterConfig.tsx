import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';

export const RouterConfig = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}