import React, { useContext } from 'react';
import { CustomContext } from '../../../utils/context';
import { useTranslation } from 'react-i18next';
import CatalogTitle from '../../../components/CatalogTitle/CatalogTitle';

export default function BreadCrumbs({title}) {
  const { state } = useContext(CustomContext);

  const { t } = useTranslation();

  return (
    <ul className="breadCrumbs">
      <li className="breadCrumbs__item">{t('catalog.menu1')}</li>
      <li className="breadCrumbs__item">
        {state.catalog.gender === 'woman'
          ? t('catalog.aside1')
          : t('catalog.aside2')}
      </li>
      <li className="breadCrumbs__item">
        <CatalogTitle />
      </li>
      <li className="breadCrumbs__item">{title ? `${title}` : ''}</li>
    </ul>
  );
}
