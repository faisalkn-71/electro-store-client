import { Link } from 'react-router-dom';
import useProducts from '../../../hook/useProducts';
import Product from '../Product/Product';
import './products.css'

const Products = () => {
    const [products, setProducts] = useProducts([]);
    
    return (
        <div id='products' className='container-fluid my-5'>
            <h1  className='mb-3 text-bold text-primary'>PRODUCTS</h1>
            <div className='products-container'>
            {
                products.slice(0, 6).map(product => <Product
                key = {product._id}
                product = {product}
                ></Product>)
            }
            </div>
            <Link className='mt-5 px-5 btn btn-dark rounded-pill' to='/products'>Show All Products</Link>
        </div>
    );
};

export default Products;