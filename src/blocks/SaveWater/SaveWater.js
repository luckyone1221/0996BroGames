import saveImg from '../../img/SaveWater.jpg'
import {useLanguage} from "../../Hooks/UseLang";

export const SaveWater = (props) => {
  const lang = useLanguage().SaveWater;

  return(
    <section className="section sSave">
      <div className="container text-sm-center">
        <div className="sSave__box">
          <div className="sSave__hashtag">#SaveWaterBro</div>
          <div className="section-title">
            <h2>{lang.title}</h2>
            <p>
              {lang.descr}
            </p>
          </div>
          <div className="sSave__img">
            <img src={saveImg} alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}