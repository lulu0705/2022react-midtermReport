import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductGrid_list from '../components/ProductGrid_list';
import blockage from "../json/blockage.json";

const { Header, Content, Footer } = Layout;

function Blockage() {
  return (
    <>
        <ProductGrid_list products={blockage}/>
    </>
  );
}

export default Blockage;