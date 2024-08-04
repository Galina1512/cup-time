import { Product } from './Product';
import { useProducts } from '../contex/ProductContext';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SkeletonLoader } from './SkeletonLoader';

export const Products = () => {
    const [seachParams] = useSearchParams();
    const { products, setCategory } = useProducts();
    const category = seachParams.get("category");

    useEffect(() => {
        setCategory(category);
    }, [category, setCategory]);
    
return (
    <section className="products">
    <div className="container">
        <h2 className="products__title">{category}</h2>
        <ul className="products__list">
        {products.length ? (
            products.map((item) => 
            <Product key={item.id} data={item} />)
        ) : (<SkeletonLoader/>)}
        </ul>
    </div>
</section>
);
}