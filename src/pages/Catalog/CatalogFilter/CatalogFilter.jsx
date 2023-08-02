import React from 'react'
import BasicSelect from './Select'
import SelectPrice from './SelectPrice';
import SelectSize from './SelectSize';
import SelectBrand from './SelectBrand';

export default function CatalogFilter() {
  return (
    <div className="filter">
      <div className="filter__select">
        <SelectSize />
      </div>
      <div className="filter__select">
        <SelectPrice />
      </div>
      <div className="filter__select">
        <SelectBrand />
      </div>

      <div className="filter__select">
        <BasicSelect />
      </div>
    </div>
  );
}
