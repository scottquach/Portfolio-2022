import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Resume from './components/Resume';

function App() {
    return (
        <div className="App">
            <div className="container">
                <Resume></Resume>
                {/* <Home></Home> */}
            </div>
        </div>
    );
}

export default App;
