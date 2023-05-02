import {Header} from "../Header/Header";

import ppImg from "../../screen/01.png";
import {HeaderBlock} from "../HeaderBlock/HeaderBlock";
import {Digits} from "../sDigits/sDigits";
import {Catalog} from "../Catalog/Catalog";
import {PreOrder} from "../PreOrder/PreOrder";
import {Recent} from "../Recent/Recent";

export const MainPage = (props) => {
  return(
    <div className="main-wrapper">
      <Header/>
      <main>
        <HeaderBlock/>
        <Digits/>
        <Catalog/>
        <PreOrder/>
        <Recent/>
      </main>
      <PixelPerfect img={ppImg}/>
    </div>
  )
}

export const PixelPerfect = (props) => {
  const {img} = props;

  return(
    <div className="pixel-perfect">
      <img src={img} alt=""/>
    </div>
  )
}