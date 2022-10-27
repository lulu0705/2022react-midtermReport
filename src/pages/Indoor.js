import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductGrid_list from '../components/ProductGrid_list';
import indoor from "../json/indoor.json";

const { Header, Content, Footer } = Layout;

function Indoor() {
  return (
    <>
        <ProductGrid_list products={indoor}/>
    </>
  );
}

export default Indoor;