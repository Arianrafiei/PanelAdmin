import "./App.css";
import Sidebar from "./pages/Sidebar";
import Statistic from "./pages/Statistic";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashbord from "./pages/Dashbord";
import Product from "./pages/Product";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/Statistic" element={<Statistic />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
