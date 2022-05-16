import { Link } from 'react-router-dom';

const Products = () => {
  return <section>
    <h1>The Products page</h1>
    <ul>
      <li id='p1'><Link to='/products/p1'>Book</Link></li>
      <li id='p2'><Link to='/products/p2'>Carpet</Link></li>
      <li id='p3'><Link to='/products/p3'>Course</Link></li>
    </ul>
  </section>;
};

export default Products;