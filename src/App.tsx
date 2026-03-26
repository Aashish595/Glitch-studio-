import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Works from './pages/Works';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <CustomCursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
