import React, { useContext } from 'react';
import CatalogCard from '../../../components/CatalogCard/CatalogCard';
import { CustomContext } from '../../../utils/context';

export default function CatalogMain() {
  const { state, dispatch } = useContext(CustomContext);
  return (
    <>
      <div className="catalogMain">
        {state.catalog.products.data &&
          state.catalog.products.data
            .filter((product) => {
              return state.catalog.size
                ? product.sizes.find(
                    (element) => element.size === state.catalog.size
                  ).inStock
                : product;
            })
            .filter((product, index) => {
              return state.catalog.page === 1
                ? index < 6
                : index < state.catalog.page * 6 &&
                    index > state.catalog.page * 6 - 7;
            })
            .map((product) => (
              <CatalogCard
                key={product.id}
                id={product.id}
                brand={product.brand}
                title={product.title}
                img={product.img}
                price={product.price}
              />
            ))}
      </div>
      <ul className="catalog__pagination">
        {Math.ceil(state.catalog.products.dataLength / 6) > 1 &&
          new Array(Math.ceil(state.catalog.products.dataLength / 6))
            .fill(null)
            .map((item, idx) => (
              <li
                onClick={() => {
                  dispatch({ type: 'changePage', payload: idx + 1 });
                }}
                className={`catalog__page ${
                  state.catalog.page === idx + 1 ? 'active' : ''
                }`}
              >
                {idx + 1}
              </li>
            ))}
      </ul>
    </>
  );
}
