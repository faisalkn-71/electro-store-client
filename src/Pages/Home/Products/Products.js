import { Link } from 'react-router-dom';
import useProducts from '../../../hook/useProducts';
import HomeProduct from '../HomeProduct/HomeProduct';
import Product from '../Product/Product';
import './products.css'

const Products = () => {
    const [products, setProducts] = useProducts([]);
    
    return (
        <div id='products' className='container-fluid my-5'>
            <h1  className='mb-3 text-bold text-primary'>PRODUCTS</h1>
            <div className='products-container'>
            {
                products.slice(0, 6).map(product => <HomeProduct
                    key = {product._id}
                    product = {product}
                ></HomeProduct>)
            }
            </div>
            
        </div>
    );
};

export default Products;