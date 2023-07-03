import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {MainPage} from "./blocks/MainPage/MainPage";

import './sass/main.scss';

import {AboutPage} from "./blocks/AboutPage/AboutPage";
import {PolicyPage} from "./blocks/PolicyPage/PolicyPage";
import {CatalogPage} from "./blocks/CatalogPage/CatalogPage";
import {ProdCardPage} from "./blocks/ProdCardPage/ProdCardPage";
import {CartPage} from "./blocks/CartPage/CartPage";
import {SearchPage} from "./blocks/SearchPage/SearchPage";
import {InfoPage} from "./blocks/InfoPage/InfoPage";

import {useLanguage} from "./Hooks/UseLang";
import {useGetSubCategories} from "./Hooks/useGetSubCategories";

function App() {
  const lang = useLanguage();
  const getSubCategories = useGetSubCategories();

  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path="/" element={<MainPage/>}/>*/}
        <Route path="/" element={<MainPage/>}/>
        <Route path="/:lang/" element={<MainPage/>}/>
        <Route path="/:lang/about" element={<AboutPage/>}/>
        <Route path="/:lang/policy" element={<PolicyPage/>}/>
        {/**/}
        <Route path="/:lang/catalog" element={<CatalogPage productType="all"/>}/>
        <Route path="/:lang/catalog/accounts" element={<CatalogPage productType="accounts"/>}/>
        <Route path="/:lang/catalog/keys" element={<CatalogPage productType="keys"/>}/>
        <Route path="/:lang/catalog/top-up" element={<CatalogPage productType={"topUp"}/>}/>
        <Route path="/:lang/catalog/currency" element={<CatalogPage productType="currency"/>}/>

        <Route path="/:lang/catalog/accounts/:subcategory" element={<CatalogPage productType="accounts"/>}/>
        <Route path="/:lang/catalog/keys/:subcategory" element={<CatalogPage productType="keys"/>}/>
        <Route path="/:lang/catalog/top-up/:subcategory" element={<CatalogPage productType={"topUp"}/>}/>
        <Route path="/:lang/catalog/currency/:subcategory" element={<CatalogPage productType="currency"/>}/>

        {/*working a little*/}
        <Route path="/:lang/prod/:id" element={<ProdCardPage/>}/>
        <Route path="/:lang/info/:id" element={<InfoPage/>}/>
        <Route path="/:lang/cart" element={<CartPage/>}/>
        <Route path="/:lang/search" element={<SearchPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
