
import "./index.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home";
import Technologies from "./Components/Pages/Technologies";
import Projects from "./Components/Pages/Projects";
import Contact from "./Components/Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="mx-4">
    <Header></Header>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
