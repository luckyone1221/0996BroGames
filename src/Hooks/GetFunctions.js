import axios from "axios";

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

      let products = parsed.getElementsByTagName('product');
      for(let product of products){
        let id = product.getElementsByTagName('id')[0].innerHTML;
        let name = product.getElementsByTagName('name')[0].innerHTML;
        let price = product.getElementsByTagName('price')[0].innerHTML;

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
export const getItemFeedbacks = async (config, itemId, page=1) => {

  try {
    const response = await axios({
      url : `https://api.digiseller.ru/api/reviews?seller_id=${config.digIds.sellerId}&product_id=${itemId}&type=all&page=${page}&rows=12`,
      method: 'Get',
      headers: {
        "Accept": "application/json"
      },
      params: {
        seller_id: config.digIds.sellerId,
        product_id: itemId,
        type: "all",
        page: page,
        rows: 12,
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

    // console.log(response);

    return response.data
  }
  catch (e){
    console.log(e);
    // window.localStorage.setItem('BroGamesRecentList', "");
  }
}
//"last 1 chrome version",
//       "last 1 firefox version",
//       "last 1 safari version"

export const getProducts = async (config, page=1, directlyId) => {
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
        rows: "12",
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
    .replace("USD", "$")
}