import "./App.css";
import Sidebar from "./pages/Sidebar";
import Statistic from "./pages/Statistic";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashbord from "./pages/Dashbord";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/Statistic" element={<Statistic />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
