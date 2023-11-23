const API_URL = 'https://api.pasteleria.com';

export const fetchProducts = () => {
  return fetch(`${API_URL}/products`).then((response) => response.json());
};
