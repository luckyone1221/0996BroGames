import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {Logger} from "sass";

export function useGetSubCategories(){
  const config = useSelector(state => state);
  const dispatch = useDispatch();

  return  useEffect(() => {
    const sellerId = config.digIds.sellerId;

    try {
      let promiseArr = [];
      for (let categoryName in config.digIds.categories){
        let categoryId = config.digIds.categories[categoryName].id;

        const response = axios({
          url : `https://api.digiseller.ru/api/categories?seller_id=${sellerId}`,
          method: 'Get',
          headers: {
            "Accept": "application/json"
          },
          params: {
            seller_id: sellerId,
            category_id: categoryId,
            lang: config.lang,
          }
        }).then((data) => {
          return data.data
        })

        promiseArr.push(response);
      }

      Promise.all(promiseArr).then((data) => {
        let newDigIds = JSON.parse(JSON.stringify(config.digIds));
        let newCategories = newDigIds.categories;

        let i = 0;
        for (let categoryName in config.digIds.categories){
          newCategories[categoryName].subCategories = data[i].category
          i++;
        }

        dispatch({type: "CHANGE_CATEGORIES", payload: newDigIds});
      })
    }
    catch (e){
      console.log(e);
    }



  }, [config.lang])
}