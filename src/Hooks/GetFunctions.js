import axios from "axios";

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

    console.log(categoryId);
    console.log(response.data);
    console.log('//');
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
  }
}

export const getProducts = async (config, page=1, prodType, currentPlatform, directlyId) => {
  const sellerId = config.digIds.sellerId;
  let categoryId;

  if(prodType && currentPlatform){
    categoryId = config.digIds[prodType][currentPlatform];
  }
  else{
    categoryId = config.currentPlatform ? config.digIds[config.prodType][config.currentPlatform] : config.digIds[config.prodType].all;
  }
  if(directlyId){
    categoryId = directlyId;
  }

  // console.log(prodType, currentPlatform);
  // console.log(config.prodType, config.currentPlatform);

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