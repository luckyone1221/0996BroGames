import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import {MainPage} from "./blocks/MainPage/MainPage";

import './sass/main.scss';
import {AboutPage} from "./blocks/AboutPage/AboutPage";
import {PolicyPage} from "./blocks/PolicyPage/PolicyPage";
import {CatalogPage} from "./blocks/CatalogPage/CatalogPage";
import {ProdCardPage} from "./blocks/ProdCardPage/ProdCardPage";
import {CartPage} from "./blocks/CartPage/CartPage";
import {SearchPage} from "./blocks/SearchPage/SearchPage";

//
import {useLanguage} from "./Hooks/UseLang";
import {useGetSubCategories} from "./Hooks/useGetSubCategories";


import {useEffect} from "react";
import {useSelector} from "react-redux";

function App() {
  const lang = useLanguage();
  const config = useSelector(state => state);
  const getSubCategories = useGetSubCategories();

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
        <Route path="/search" element={<SearchPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
