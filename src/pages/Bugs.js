import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductGrid_list from '../components/ProductGrid_list';
import bugs from "../json/bugs.json";

const { Header, Content, Footer } = Layout;

function Bugs() {
  return (
    <>
        <ProductGrid_list products={bugs}/>
    </>
  );
}

export default Bugs;