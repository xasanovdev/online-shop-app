import React, { useContext, useEffect } from 'react';
import BreadCrumbs from './BreadCrumbs/BreadCrumbs';
import SideBar from './SideBar/SideBar';
import CatalogMain from './CatalogMain/CatalogMain';
import CatalogTitle from '../../components/CatalogTitle/CatalogTitle';
import { CustomContext } from '../../utils/context';

export default function Catalog() {
  const { gender, category, getProducts } = useContext(CustomContext);

  useEffect(() => {
    getProducts();
  }, [gender, category]);

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
              <CatalogMain />
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
