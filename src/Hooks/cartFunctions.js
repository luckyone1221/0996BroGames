import axios from "axios";

export const addToCart = async (id,config, count="1") => {

  try {
    const response = await axios({
      url : `https://shop.digiseller.ru/xml/shop_cart_add.asp`,
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        seller_id: config.seller_id,
        product_id: id,
        product_cnt: count,
        typecurr: "BLN",
        lang: config.lang,
        cart_uid: config.cartUID ? config.cartUID : "",
      }
    })

    if(response.data.cart_err_num === "0"){
      window.localStorage.setItem('BroGamesCartId', JSON.stringify(response.data.cart_uid));
      window.localStorage.setItem('BroGamesCartResponse', JSON.stringify(response.data));
    }

    // console.log(response.data);

    return response.data
  }
  catch (e){
    console.log(e);
  }
}
export const changeCartItemAmount = async (itemId, config, count=0) => {
  try{
    let cartId;
    if(itemId){
      for(let item of config.cartResponse.products){
        if(item.id === itemId){
          cartId = item.item_id;
        }
      }
    }

    const response = await axios({
      url : `https://shop.digiseller.ru/xml/shop_cart_lst.asp`,
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        cart_uid: config.cartUID,
        cart_curr: config.currency,
        item_id: cartId,
        product_cnt: count,
        lang: config.lang,
      }
    })

    if(response.data.cart_err_num === "0"){
      window.localStorage.setItem('BroGamesCartId', JSON.stringify(response.data.cart_uid));
      window.localStorage.setItem('BroGamesCartResponse', JSON.stringify(response.data));
    }
    // console.log(response.data);

    return response.data
  }
  catch (e){
    console.log(e);
  }
}