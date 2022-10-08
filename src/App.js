import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/product/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="/sample" element={<Product/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
