import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    
    <BrowserRouter>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
