import ppImg from "../../screen/catalog.png";

import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {PixelPerfect} from "../MainPage/MainPage";
import {useState} from "react";
import {CatalogSlider} from "../CatalogSlider/CatalogSlider";
import {CatalogHeader} from "../CatalogHeader/CatalogHeader";
import {CatalogItems} from "../CatalogItems/CatalogItems";

export const CatalogPage = (props) => {
  
  return (
    <div className="main-wrapper">
      <Header/>
      <main>
        <CatalogHeader/>
        <CatalogSlider/>
        <CatalogItems/>
      </main>
      <Footer/>
      {/*<PixelPerfect img={ppImg}/>*/}
    </div>
  )
}