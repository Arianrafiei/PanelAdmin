import './App.css';
import Sidebar from './pages/Sidebar';
import Email from './pages/Email';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
<>
    <Router>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='Email' element={<Email/>} />
      </Routes>
    </Router>

</>
  );
}

export default App;
