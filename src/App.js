import CartContent from "./componets/CartWidget/CartContent";
import Inicio from "./componets/Inicio/inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataProvider } from "./componets/Context/DataContext";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cart" element={<CartContent />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
