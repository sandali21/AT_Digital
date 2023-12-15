import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<MainContent/>}/>
        </Routes>
        </Router>
      
    </div>
  );
}

export default App;
