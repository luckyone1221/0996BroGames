import axios from "axios";
import { sha256 } from 'js-sha256';

//not working yet
export const getApiToken = async (config) => {
  let now = new Date().getTime();
  let apiKey = '1108B8C48B1D410385AF6AB42301E5AE';
  let sign = sha256(`${apiKey}${now}`);

  try {

    const response = await axios({
      url : `https://api.digiseller.ru/api/apilogin?seller_id=${config.digIds.sellerId}&timestamp=${now}&sign=${sign}`,
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      data: {
        seller_id: config.digIds.sellerId,
        timestamp: now,
        sign: sign
      }
    })

    return response.data
  }
  catch (e){
    console.log(e);
  }
}
//not working yet too
export const getStat = async (config, token) => {
  let date = new Date();
  let addZero = (num) => {
    if(Number(num) >=0 && Number(num) <= 9){
      return `0${num}`
    }
  }

  try {
    const response = await axios({
      url : `https://api.digiseller.ru/api/seller-sells/v2?token=${token}`,
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      data: {
        date_start: "2017-01-01 00:00:00",
        date_finish: `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDay()+1)} 00:00:00`,
        returned: 0,
        page: 1,
      }
    })

    // console.log(response.data);

    return response.data
  }
  catch (e){
    console.log(e);
  }
}

//works
export const getTgData = async () => {
  try {
    const response = await axios({
      url : process.env.REACT_APP_TELEGRAM_API,
      method: 'Get',
      headers: {
        "Accept": "application/json"
      },
      params: {}
    })

    // console.log(response.data);

    return response.data
  }
  catch (e){
    console.log(e);
  }
}
export const getSearchResults = async (config) => {

  try {
    if(config.searchTxt === ''){
      return []
    }

    let xmlBodyStr = `
      <?xml version="1.0" encoding="utf-8"?>
      <digiseller.request>
        <seller>
          <id>${config.digIds.sellerId}</id>
        </seller>
        <products>
          <search>${config.searchTxt}</search>
          <currency>${config.currency}</currency>
        </products>
        <pages>
          <num>0</num>
          <rows>100</rows>
        </pages>
        <lang>${config.lang}</lang>
      </digiseller.request>
    `;
    let axiosConfig = {
      headers: {'Content-Type': 'text/xml'}
    };
    const response = await axios.post('http://shop.digiseller.ru/xml/shop_search.asp', xmlBodyStr);

    let result = [];
    let content = response.data;//your xml string variable
    if (typeof content === 'string') {
      let parsed = new DOMParser().parseFromString(content, "text/xml");
      console.log(parsed);

      let products = parsed.getElementsByTagName('product');
      for(let product of products){
        let id;
        let name;
        let price;
        try {
          id = product.getElementsByTagName('id')[0].innerHTML;
          name = product.getElementsByTagName('name')[0].innerHTML;
          price = product.getElementsByTagName('price')[0].innerHTML;
        }
        catch (e){
          console.log(e)
        }

        result.push({
          id: id,
          name: name,
          price: price,
        })
      }
    }

    return result
  }
  catch (e){
    console.log(e);
  }
}
export const getItemFeedbacks = async (config, itemId, type="all", page=1, amount=36) => {

  try {
    const response = await axios({
      url : `https://api.digiseller.ru/api/reviews?seller_id=${config.digIds.sellerId}&product_id=${itemId}&type=${type}&page=${page}&rows=${amount}`,
      method: 'Get',
      headers: {
        "Accept": "application/json"
      },
      params: {
        seller_id: config.digIds.sellerId,
        product_id: itemId,
        type: type,
        page: page,
        rows: amount,
        lang: config.lang
      }
    })

    // console.log(response.data);

    return response.data
  }
  catch (e){
    console.log(e);
  }
}

export const getCatalogList = async (config, categoryId=0) => {
  const sellerId = config.digIds.sellerId;

  try {
    const response = await axios({
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
    })


    console.log(response.data);
    return response.data
  }
  catch (e){
    console.log(e);
  }
}

export const getItemChars = async (config, itemId) => {
  try {
    const response = await axios({
      url : `https://api.digiseller.ru/api/products/${itemId}/data`,
      method: 'Get',
      headers: {
        "Accept": "application/json"
      },
      params: {
        product_id: itemId,
        currency: config.currency,
        lang: config.lang
      }
    })

    return response.data
  }
  catch (e){
    console.log(e);
  }
}

export const getProducts = async (config, page=1, directlyId, amount="12") => {
  const sellerId = config.digIds.sellerId;
  const categories = config.digIds.categories;
  let categoryId;

  if(config.currentPlatform){
    categoryId = config.currentPlatform;
  }
  else{
    categoryId = categories[config.prodType].id;
  }
  if(directlyId){
    categoryId = directlyId;
  }

  try {
    const response = await axios({
      url : `https://api.digiseller.ru/api/shop/products?seller_id=${sellerId}&category_id=${categoryId}`,
      method: 'Get',
      headers: {
        "Accept": "application/json"
      },
      params: {
        seller_id: sellerId,
        category_id: categoryId,
        page: page,
        rows: amount,//??
        currency: config.currency,
        order: config.sortOrder,
        lang: config.lang,//en-US
      }
    })

    return response.data
  }
  catch (e){
    console.log(e);
  }
}

export const getProdTypeOption = (options, value) => {
  return options.filter((option) => {
    return option.reduxKey === value;
  })
}

export const getSortOrderOption = (options, value) => {
  return options.filter((option) => {
    return option.value === value;
  })
}

export const getSelectClasses = (state) => {
  return {
    control: (state) => 'custom-select__control',
    valueContainer: (state) => 'custom-select__val-cont',
    singleValue: (state) => 'custom-select__value',
    placeholder: (state) => 'custom-select__placeholder',
    input: (state) => 'custom-select__input',
    indicatorsContainer: (state) => 'custom-select__indicators-cont',
    indicatorSeparator: (state) => 'custom-select__separator',
    indicatorContainer: (state) => 'custom-select__img',
    menu: (state) => 'custom-select__menu',
    menuList: (state) => 'custom-select__menu-list',
  }
}

export const getCurrencySymb = (string) =>{
  return string
    .replace("RUR", "₽")
    .replace("RUB", "₽")
    .replace("UAH", "₴")
    .replace("USD", "$")
}

export const getSubcategoryNameById = (id, config) => {
  for (let subcategory of config.digIds.categories[config.prodType].subCategories){
    if (subcategory.id === id){
      return subcategory.name
    }
  }
  return
}

export const getServerToLink = (str) => {
  return str.replace("en-US", "en").replace("ru-Ru", "ru")
}