import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SinglePage from "./components/SinglePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/singlejob/:id" element={<SinglePage />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </>
  );
}

export default App;
