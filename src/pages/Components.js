import { Layout } from 'antd';
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import ProductGrid_list from '../components/ProductGrid_list';
import products from "../json/products.json";

const { Header, Content, Footer } = Layout;

function Components() {
  return (
    <>
        <ProductGrid_list products={products}/>
    </>
  );
}

export default Components;
