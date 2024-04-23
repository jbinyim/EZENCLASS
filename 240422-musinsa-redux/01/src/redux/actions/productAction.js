const getProducts = (searchQuery) => {
  return async (dispatch) => {
    const url = ` https://my-json-server.typicode.com/jbinyim/musinsa-project/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "GET_PRODUCT_SUVVESS", payload: { data } });
  };
};

export const productAction = { getProducts };
