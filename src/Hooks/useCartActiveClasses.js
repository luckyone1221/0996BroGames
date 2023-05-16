import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export function useCartActiveClasses(id){
  const [btnClasses, setBtnClasses] = useState("");
  const cartResponse = useSelector(state => state.cartResponse);

  useEffect(() => {
    if(cartResponse && cartResponse.products && Array.isArray(cartResponse.products)){
      for (let item of cartResponse.products) {
        if(item.id === id){
          setBtnClasses("active");
        }
      }
    }
  }, [cartResponse]);

  return btnClasses
}