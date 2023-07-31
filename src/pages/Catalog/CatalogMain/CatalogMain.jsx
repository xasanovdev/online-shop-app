import React, { useContext } from 'react';
import Card from '../../../components/Card/Card';
import { CustomContext } from '../../../utils/context';

export default function CatalogMain() {
  const { products } = useContext(CustomContext);
  return (
    <div className="catalogMain">
      {products.data.map((product) => (
        <Card
          key={product.id}
          brand={product.brand}
          title={product.title}
          img={product.img}
          price={product.price}
        />
      ))}
    </div>
  );
}
