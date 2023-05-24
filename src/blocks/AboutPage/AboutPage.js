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
import {useSelector} from "react-redux";

export const AboutPage = (props) => {
  const content = useSelector(state => state.content);

  return(
    <div className="main-wrapper">
      <Header/>
      <main>
        <BroHeaderBlock/>
        <ImgBox/>
        <WhyUs/>
        <SaveWater/>
        <WhatWeDo/>
        <Review itemId={content.feedBackFallBackId}/>
        <HowItWorks/>
        <Fresh/>
      </main>
      <Footer/>
    </div>
  )
}