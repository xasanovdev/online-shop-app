import React, { useContext } from 'react'
import { CustomContext } from '../../utils/context'
import { useTranslation } from 'react-i18next';

export default function CatalogTitle() {
  const {t} = useTranslation()

  const {category} = useContext(CustomContext)

  return (
    <>
      {category === 't-short' ? t('catalog.aside4') : ''}
      {category === 'sweatshirt' ? t('catalog.aside6') : ''}
      {category === 'pants' ? t('catalog.aside5') : ''}
      {category === 'shoes' ? t('catalog.aside3') : ''}
    </>
  );
}
