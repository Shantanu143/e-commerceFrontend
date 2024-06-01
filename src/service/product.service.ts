import axios from "axios";

const BASE_API_URL = "http://localhost:8080/api/product/";
interface ProductData {
  productName: string;
  description: string;
  category: string;
  price: string;
  image: string;

  timestamp: string;
}

class ProductService {
  saveProduct(productData: ProductData) {
    return axios.post(BASE_API_URL, productData);
  }

  getAllProducts() {
    return axios.get(BASE_API_URL);
  }
  getProductById(id: number) {
    return axios.get(BASE_API_URL + id);
  }
  deleteProduct(id: number) {
    return axios.delete(BASE_API_URL + id);
  }
  updateProduct(id: string, productData: ProductData) {
    return axios.put(BASE_API_URL + id, productData);
  }
}

export default new ProductService();
