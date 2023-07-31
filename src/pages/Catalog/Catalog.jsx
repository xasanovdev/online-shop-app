import React from 'react';
import BreadCrumbs from './BreadCrumbs/BreadCrumbs';
import SideBar from './SideBar/SideBar';
import CatalogMain from './CatalogMain/CatalogMain';

export default function Catalog() {
  return (
    <section className="catalog">
      <div className="container">
        <BreadCrumbs />
        <div className="catalog__content">
          <SideBar />
          <main className="catalog__right">
            <div className="catalog__main">
              <CatalogMain />
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
