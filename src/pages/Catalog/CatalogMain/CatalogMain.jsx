import React, { useContext, useState } from 'react';
import Card from '../../../components/Card/Card';
import { CustomContext } from '../../../utils/context';

export default function CatalogMain() {
  const { products, size, page, setPage } = useContext(CustomContext);
  return (
    <>
      <div className="catalogMain">
        {products.data
          .filter((product) => {
            return size
              ? product.sizes.find((element) =>
                  size ? element.size === size : element
                ).inStock
              : product;
          })
          .filter((product, index) => {
            return page === 1
              ? index < 6
              : index < page * 6 && index > page * 6 - 7;
          })
          .map((product) => (
            <Card
              id={product.id}
              key={product.id}
              brand={product.brand}
              title={product.title}
              img={product.img}
              price={product.price}
            />
          ))}
      </div>
      <ul className="catalog__pagination">
        {new Array(Math.ceil(products.dataLength / 6))
          .fill(null)
          .map((item, idx) => (
            <li
              onClick={() => setPage(idx + 1)}
              className={`catalog__page ${page === idx + 1 ? 'active' : ''}`}
            >
              {idx + 1}
            </li>
          ))}
      </ul>
    </>
  );
}
