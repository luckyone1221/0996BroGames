import img1 from '../../img/sImg-1.jpg'
import img2 from '../../img/sImg-2.jpg'
import {useLanguage} from "../../Hooks/UseLang";

export const ImgBox = (props) => {
  const lang = useLanguage().ImgBox;

  return(
    <div className="section sImg">
      <div className="container">
        <div className="sImg__row row">
          <ImgBoxItem img={img1} txt={lang.item1}/>
          <ImgBoxItem img={img2} txt={lang.item2}/>
        </div>
      </div>
    </div>
  )
}
const ImgBoxItem = (props) => {
  const {txt, img} = props;

  return(
    <div className="col-md-6">
      <div className="sImg__box">
        <div className="sImg__txt">{txt}</div>
        <div className="sImg__img">
          <img src={img} loading="lazy" alt=""/>
        </div>
      </div>
    </div>
  )
}