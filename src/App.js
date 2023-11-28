import './App.css';
import Sidebar from './pages/Sidebar';
import SalesStatistic from './pages/SalesStatistic';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashbord from './pages/Dashbord';


function App() {
  return (
<>
    <Router>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Dashbord/>} />
        <Route path='/SalesStatistic' element={<SalesStatistic/>} />
      </Routes>
    </Router>
</>
  );
}

export default App;
