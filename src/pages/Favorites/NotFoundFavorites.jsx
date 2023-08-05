import React from 'react'
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

export default function NotFoundFavorites() {
  return (
    <div className="notFound">
      <div className="notFound__container container">
        <h1 className="notFound__title">Ваша корзина пуста</h1>
        <div className="notFound__img">
          <svg
            width="114"
            height="88"
            viewBox="0 0 114 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.568328 86.9792L11.6757 0.5H102.288L113.431 86.9792H0.568328Z"
              fill="white"
              stroke="#E64926"
            />
            <path
              d="M81.0589 9.63089C81.0589 16.8679 78.5223 23.8084 74.007 28.9258C69.4917 34.0431 63.3677 36.918 56.9821 36.918C50.5965 36.918 44.4725 34.0431 39.9572 28.9258C35.4419 23.8085 32.9053 16.8679 32.9053 9.63089"
              stroke="#E64926"
            />
            <path
              d="M34.5 8.48047C34.5 9.21055 33.7145 9.98047 32.5 9.98047C31.2855 9.98047 30.5 9.21055 30.5 8.48047C30.5 7.75039 31.2855 6.98047 32.5 6.98047C33.7145 6.98047 34.5 7.75039 34.5 8.48047Z"
              stroke="#E64926"
            />
            <circle cx="81" cy="8.48047" r="1.5" stroke="#E64926" />
          </svg>
          <svg
            width="405"
            height="14"
            viewBox="0 0 405 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_94_3675)">
              <ellipse cx="202.5" cy="7" rx="197.5" ry="2" fill="#E8E8E8" />
            </g>
            <defs>
              <filter
                id="filter0_f_94_3675"
                x="0"
                y="0"
                width="405"
                height="14"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="2.5"
                  result="effect1_foregroundBlur_94_3675"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <p className="notFound__subtitle">
          Добавьте что-то, чтобы сэкономить время и сделать шопинг еще более
          приятным.
        </p>
        <Link to='/catalog'>
          <Button classNameColor="btn__buy" title="перейти в каталог" />
        </Link>

      </div>
    </div>
  );
}
