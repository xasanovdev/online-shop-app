import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomContext } from '../../../utils/context';
import Button from '../../../components/Button/Button';
const ProductInfo = ({ product }) => {
  const { setProductForOrders } = useContext(CustomContext);

  const { t, i18n } = useTranslation();

  const [size, setSize] = useState('');

  return (
    <div className="product__info">
      <h2 className="product__title">{product.title}</h2>
      <p className="product__category">{product.category}</p>
      <p className="product__price">
        {i18n.language === 'en' ? product.price : product.price * 83}
        {i18n.language === 'ru' ? ' руб.' : ' $'}
      </p>
      <p className="product__title-size">Размер</p>
      <ul className="product__list">
        {product.sizes.map((item) => (
          <li
            style={{
              background: `${size === item.size ? 'black' : 'transparent'} `,
              color: `${size === item.size ? 'white' : 'black'} `,
            }}
            onClick={() => {
              if (item.inStock) {
                setSize(item.size);
              }
            }}
            className={`${
              item.inStock > 0 ? 'product__size' : 'product__size_null'
            }`}
          >
            {item.size}
          </li>
        ))}
      </ul>
      <div className="product__btns">
        <div>
          <button
            className="btn btn__cart"
            onClick={() => {
              if (size) {
                setProductForOrders({ ...product, size });
                setSize('')
              } else {
                alert('Выберите размер');
              }
            }}
          >
            {t('product.btn1')}
          </button>
        </div>
        <div>
          <button className="btn btn__cart btn__buy">{t('product.btn2')}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
