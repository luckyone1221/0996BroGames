import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {MainPage} from "./blocks/MainPage/MainPage";

import './sass/main.scss';
import {AboutPage} from "./blocks/AboutPage/AboutPage";
import {PolicyPage} from "./blocks/PolicyPage/PolicyPage";
import {CatalogPage} from "./blocks/CatalogPage/CatalogPage";
import {ProdCardPage} from "./blocks/ProdCardPage/ProdCardPage";
import {CartPage} from "./blocks/CartPage/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainPage/>}
        />
        <Route
          path="/about"
          element={<AboutPage/>}
        />
        <Route
          path="/policy"
          element={<PolicyPage/>}
        />
        <Route
          path="/catalog"
          element={<CatalogPage/>}
        />
        <Route
          path="/prod-card"
          element={<ProdCardPage/>}
        />
        <Route
          path="/cart"
          element={<CartPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
