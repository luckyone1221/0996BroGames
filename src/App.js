import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import {MainPage} from "./blocks/MainPage/MainPage";

import './sass/main.scss';
import {AboutPage} from "./blocks/AboutPage/AboutPage";
import {PolicyPage} from "./blocks/PolicyPage/PolicyPage";
import {CatalogPage} from "./blocks/CatalogPage/CatalogPage";
import {ProdCardPage} from "./blocks/ProdCardPage/ProdCardPage";
import {CartPage} from "./blocks/CartPage/CartPage";
import {useLanguage} from "./Hooks/UseLang";
import {useEffect} from "react";

function App() {
  const lang = useLanguage();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/policy" element={<PolicyPage/>}/>
        {/**/}
        <Route path="/catalog" element={<CatalogPage productType="all"/>}/>
        <Route path="/catalog/accounts" element={<CatalogPage productType="accounts"/>}/>
        <Route path="/catalog/activations" element={<CatalogPage productType="activations"/>}/>
        <Route path="/catalog/keys" element={<CatalogPage productType="keys"/>}/>
        {/*<Route path="/catalog/top-up" element={<CatalogPage productType={lang.CatalogItems.topUp}/>}/>*/}
        {/**/}
        <Route path="/prod/:id" element={<ProdCardPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
