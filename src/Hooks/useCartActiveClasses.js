import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export function useCartActiveClasses(id){
  const navigate = useNavigate();
  const [btnClasses, setBtnClasses] = useState("");

  const config = useSelector(state => state);
  let cartResponse = config.cartResponse;

  useEffect(() => {
    setBtnClasses("");
    if(cartResponse && cartResponse.products && Array.isArray(cartResponse.products)){

      for (let item of cartResponse.products) {
        if(Number(item.id) === Number(id)){
          setBtnClasses("active");
        }
      }
    }
  }, [cartResponse, navigate, id]);

  return btnClasses
}