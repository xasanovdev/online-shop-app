import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomContext } from '../../utils/context';
import Button from '../Button/Button';

export default function FavoritesCard({
  img,
  id,
  brand,
  price,
  deleteCost,
  title,
  category,
}) {
  const { t, i18n } = useTranslation();
  const { state, setProductForOrders, deleteProductForFavorites } =
    useContext(CustomContext);

  return (
    <div>
      <div className="favorites__card">
        <Link to={`/product/${id}`}>
          <div className="favorites__card__img">
            <img src={`../${img[0]}`} alt={title} />
          </div>
        </Link>
        <div className="favorites__card__title">
          <p className="favorites__card__title-link">{title}</p>
          <p className="favorites__card__title-category">{category}</p>
          <p className="favorites__card__title-brand">{brand}</p>
          <p className="favorites__card__title-cost">
            <span className="cost-deleted">
              <del>{deleteCost}</del>
            </span>
            <span className="cost-active">
              {i18n.language === 'ru' ? `${price} $` : `${price * 92} руб.`}
            </span>
          </p>
          <div className="favorites__card__button__add">
            <button
              className="btn btn__cart"
              onClick={() =>
                setProductForOrders(
                  state.catalog.products.data.find((item) => item.id == id)
                )
              }
            >
              {t('product.btn1')}{' '}
            </button>
          </div>
          <div className="favorites__card__delete">
            <p onClick={() => deleteProductForFavorites(id)}>x</p>
          </div>
        </div>
      </div>
    </div>
  );
}
