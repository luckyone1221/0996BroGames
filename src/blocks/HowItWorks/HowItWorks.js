import {useState} from "react";
import SlideToggle from "react-slide-toggle";

export const HowItWorks = (props) => {
  const {} = props;

  return(
    <section className="section sHow">
      <div className="container">
        <div className="section-title">
          <h2>How it works</h2>
        </div>
        <div className="sHow__items">
          <HowItWorksItem title={'Is there a free trial available?'} content={'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'} isOpen={true}/>
          <HowItWorksItem title={'Can I change my plan later?'} content={'reply'} isOpen={false}/>
          <HowItWorksItem title={'What is your cancellation policy?'} content={'reply'} isOpen={false}/>
          <HowItWorksItem title={'Can other info be added to an invoice?'} content={'reply'} isOpen={false}/>
          <HowItWorksItem title={'How does billing work?'} content={'reply'} isOpen={false}/>
          <HowItWorksItem title={'How do I change my account email?'} content={'reply'} isOpen={false}/>
        </div>
      </div>
    </section>
  )
}

export const HowItWorksItem = (props) => {
  const {title, content, isOpen} = props;

  const [showContent, setShowContent] = useState(isOpen);

  return(
    <SlideToggle
      collapsed={!isOpen}
    >
      {({ toggle, setCollapsibleElement }) => (
        <div className="sHow__item">
          <div className="sHow__head" onClick={() => {
            setShowContent(!showContent);
            toggle();
          }}>
            <div className="sHow__row row align-items-center">
              <div className="col">
                <div className="sHow__title">{title}</div>
              </div>
              <div className="col-auto">
                <div className={`sHow__ball ${showContent ? "active" : ''}`}>
                </div>
              </div>
            </div>
            <div className={`sHow__content ${showContent ? "active" : ''}`} ref={setCollapsibleElement}>
              <div className="sHow__content-inner">
                {content}
              </div>
            </div>
          </div>
        </div>
      )}
    </SlideToggle>
  )
}