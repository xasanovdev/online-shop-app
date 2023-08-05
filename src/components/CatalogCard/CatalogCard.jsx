import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomContext } from '../../utils/context';

export default function CatalogCard({
  img,
  id,
  brand,
  price,
  deleteCost,
  title,
  category,
}) {
  const { i18n } = useTranslation();

  const { setProductForFavorites, state, deleteProductForFavorites } =
    useContext(CustomContext);
  return (
    <div className="catalog__card">
      <Link to={`/product/${id}`}>
        <div className="catalog__card__img">
          <img src={`../${img[0]}`} alt={title} />
        </div>
      </Link>
      <p
        className="catalog__card__like"
        onClick={() => {
          if (
            state.favorites.data.filter((favorite) => favorite.id == id).length
          ) {
            deleteProductForFavorites(id);
          } else {
            setProductForFavorites(id);
          }
        }}
      >
        <svg
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill={`${
            state.favorites.data.filter((favorite) => favorite.id == id).length
              ? 'red'
              : 'none'
          }`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="22.5" cy="22.5" r="22.5" fill="white" />
          <path
            d="M14.318 16.318C16.0754 14.5607 18.9246 14.5607 20.682 16.318L22.5 18.136L24.318 16.318C26.0754 14.5607 28.9246 14.5607 30.682 16.318C32.4393 18.0754 32.4393 20.9246 30.682 22.682L22.5 30.864L14.318 22.682C12.5607 20.9246 12.5607 18.0754 14.318 16.318Z"
            stroke="#0F303F"
          />
        </svg>
      </p>
      <div className="catalog__card__title">
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
    </div>
  );
}
