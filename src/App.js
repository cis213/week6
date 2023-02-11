import { useState } from 'react';

const INITIAL_PRODUCTS = [
  { id: 'p1', title: 'React - The Complete Guide [Course]', price: 19.99 },
  { id: 'p2', title: 'Stylish Chair', price: 329.49 },
  { id: 'p3', title: 'Ergonomic Chair', price: 269.99 },
  { id: 'p4', title: 'History Video Game Collection', price: 99.99 },
];

function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  const addProductHandler = () => {
    // taking current products and adding a new product to the array
    // concat: returns a new array vs push that mutates the original array
    setProducts((curProducts) => {
      const newProduct = {
        id: Math.random().toString(),
        title: 'New Product',
        price: 9.99,
      };
      return curProducts.concat(newProduct); 
    });
  }
  
  return (
    <section>
      { /* adddProductHandler mutates state and forces a re-paint of the <App/> component */}
      <button onClick={addProductHandler}>Add Product</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} (${product.price})
          </li>
          ))
        }
    </ul>
  </section>
  );
}

export default App;
