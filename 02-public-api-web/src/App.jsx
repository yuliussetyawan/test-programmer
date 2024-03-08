import { Navbar, Footer } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
