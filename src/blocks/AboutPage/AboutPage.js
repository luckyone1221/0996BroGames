import ppImg from '../../screen/about.png'

import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {BroHeaderBlock} from "../BroHeaderBlock/BroHeaderBlock";
import {PixelPerfect} from "../MainPage/MainPage";
import {WhyUs} from "../WhyUs/WhyUs";
import {ImgBox} from "../ImgBox/ImgBox";
import {SaveWater} from "../SaveWater/SaveWater";
import {WhatWeDo} from "../WhatWeDo/WhatWeDo";
import {Review} from "../Review/Review";
import {Fresh} from "../Fresh/Fresh";
import {HowItWorks} from "../HowItWorks/HowItWorks";

export const AboutPage = (props) => {

  return(
    <div className="main-wrapper">
      <Header/>
      <main>
        <BroHeaderBlock/>
        <ImgBox/>
        <WhyUs/>
        <SaveWater/>
        <WhatWeDo/>
        <Review/>
        <HowItWorks/>
        <Fresh/>
      </main>
      <Footer/>
      <PixelPerfect img={ppImg}/>
    </div>
  )
}