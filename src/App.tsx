import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import InfoDetails from "./Component/InfoDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h2>Find Your Information </h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/infoDetails" element={<InfoDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
