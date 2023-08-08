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
  const { deleteProductForOrders } =
    useContext(CustomContext);

  return (
    <div>
      <div className="orders__card">
        <Link to={`/product/${id}`}>
          <div className="orders__card__img">
            <img src={`../${img[0]}`} alt={title} />
          </div>
        </Link>
        <div className="orders__card__title">
          <p className="orders__card__title-link">{title}</p>
          <p className="orders__card__title-category">{category}</p>
          <p className="orders__card__title-brand">{brand}</p>
          <p className="orders__card__title-cost">
            <span className="cost-deleted">
              <del>{deleteCost}</del>
            </span>
            <span className="cost-active">
              {i18n.language === 'ru' ? `${price} $` : `${price * 92} руб.`}
            </span>
          </p>
          <div className="orders__card__delete">
            <p onClick={() => deleteProductForOrders(id)}>x</p>
          </div>
        </div>
      </div>
    </div>
  );
}
