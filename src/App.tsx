import './App.css';
import Homepage from './Homepage';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Uploadpage from './upload/Uploadpage';
import Navigation from './nav/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='app__nav'>
          <Navigation/>
        </div>
        <div className="app__body">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/upload" element={<Uploadpage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
