const API_URL = 'https://fakestoreapi.com/products/';

const items = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default items;
