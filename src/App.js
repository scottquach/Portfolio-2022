import './App.css';
import Home from './components/Home';
import Resume from './components/Resume';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        checkMode();
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => checkMode());
    }, []);

    function checkMode() {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            console.log('dark');
            setDarkMode(true);
            // document.body.classList.add('dark');
        } else {
            console.log('light');
            setDarkMode(false);
            // document.body.classList.remove('dark');
        }
    }

    return (
        <div className={`App ${darkMode ? 'dark' : ''}`}>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/resume" element={<Resume></Resume>}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
