import saveImg from '../../img/SaveWater.jpg'

export const SaveWater = (props) => {

  return(
    <section className="section sSave">
      <div className="container text-sm-center">
        <div className="sSave__box">
          <div className="sSave__hashtag">#SaveWaterBro</div>
          <div className="section-title">
            <h2>Save water</h2>
            <p>
              Don't pollute it with chemicals (car wash, dishwashers, shampoos), remember,
              it&nbsp;goes&nbsp;to water , air and ground. And then you drink it, breath it and eat it! All of&nbsp;this&nbsp;is not just about water. It’s about all things that harm nature and ourselves!
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