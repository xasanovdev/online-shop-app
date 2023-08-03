import React, { useContext, useEffect } from 'react';
import BreadCrumbs from './BreadCrumbs/BreadCrumbs';
import SideBar from './SideBar/SideBar';
import CatalogMain from './CatalogMain/CatalogMain';
import CatalogTitle from '../../components/CatalogTitle/CatalogTitle';
import { CustomContext } from '../../utils/context';
import CatalogFilter from './CatalogFilter/CatalogFilter';

export default function Catalog() {
  const { state, getProducts,gerBrands } = useContext(CustomContext);
  

  useEffect(() => {
    getProducts();
  }, [
    state.catalog.gender,
    state.catalog.category,
    state.catalog.price,
    state.catalog.size,
    state.catalog.brand,
  ]);

  return (
    <section className="catalog">
      <div className="container">
        <BreadCrumbs />
        <div className="catalog__content">
          <SideBar />
          <main className="catalog__right">
            <div className="catalog__title">
              <CatalogTitle />
            </div>
            <div className="catalog__main">
              <CatalogFilter />
              <CatalogMain />
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
