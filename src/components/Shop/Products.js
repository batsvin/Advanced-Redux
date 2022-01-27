import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: 'p1', price: 6, title: 'My firs book', description: 'This is a first product - amazing!' },
  { id: 'p2', price: 5, title: 'My second book', description: 'This is a first product - amazing!' }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((prod) => (
          <ProductItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            price={prod.price}
            description={prod.description}
          />
        ))}

      </ul>
    </section>
  );
};

export default Products;
