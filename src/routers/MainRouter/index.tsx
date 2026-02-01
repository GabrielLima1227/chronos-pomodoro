import { useEffect } from 'react';
import { Home } from '../../pages/Home';
import { NotFound } from '../../pages/NotFound';
import { AboutPomodoro } from '../../pages/AboutPomodoro';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);
    return null;
}

export function MainRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about-pomodoro' element={<AboutPomodoro />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <ScrollToTop />
            </BrowserRouter>
        </>
    );
}
