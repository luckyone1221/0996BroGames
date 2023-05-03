import img1 from '../../img/sImg-1.jpg'
import img2 from '../../img/sImg-2.jpg'

export const ImgBox = (props) => {

  return(
    <div className="section sImg">
      <div className="container">
        <div className="sImg__row row">
          <ImgBoxItem img={img1} txt={'Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.'}/>
          <ImgBoxItem img={img2} txt={'Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.'}/>
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