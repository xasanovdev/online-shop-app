import { Link } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Card({
  img,
  id,
  brand,
  price,
  deleteCost,
  title,
  category,
}) {
  const { i18n } = useTranslation();
  return (
    <div className="card">
      <Link to={`/product/${id}`}>
        <div className="card__img">
          <img src={`../${img[0]}`} alt={title} />
        </div>
        <div className="card__title">
          <a href="" className="card__title-link">
            {title}
          </a>
          <p className="card__title-category">{category}</p>
          <p className="card__title-brand">{brand}</p>
          <p className="card__title-cost">
            <span className="cost-deleted">
              <del>{deleteCost}</del>
            </span>
            <span className="cost-active">
              {i18n.language === 'ru' ? `${price} $` : `${price * 92} руб.`}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
}
