import info from "../../infoPagesContent.json";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export const InfoBlock = (props) => {
  const config = useSelector(state => state);

  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    if(info[params.id]){
      setData(info[params.id][config.lang]);
    }
  }, [config.lang])

  if(data){
    return(
      <section className="section sInfo">
        <div className="container">
          <div className="section-title text-xl-center">
            <h1>{data.mainTitle}</h1>
          </div>
          <ul className="sInfo__list">
            {data.list.map((item,index) => {
              return (
                <li key={index} className="sInfo__list-item">
                  <div className="sInfo__txt">
                    <div className="sInfo__title">{item.title}</div>
                    <div className="sInfo__descr">{item.descr}</div>
                  </div>
                  {item.imgs && item.imgs.length > 0 && item.imgs.map((src, index) => {
                    return <div className="sInfo__img">
                      <img loading="lazy" src={src} alt=""/>
                    </div>
                  })}
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    )
  }
  else{
    return (
      <section className="section">
        <div className="container">
          <h1>404</h1>
        </div>
      </section>
    )
  }

}