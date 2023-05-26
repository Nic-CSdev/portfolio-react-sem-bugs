import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="" element={<><NavBar /><Home /><About /><Skills /><Work /><Contact /><Footer /></>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
