import './App.css';
import Home from './components/Home';
import Resume from './components/Resume';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
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
