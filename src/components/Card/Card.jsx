import React from 'react';

export default function Card({image,brand,cost,deleteCost,title}) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={image} alt="" />
      </div>
      <div className="card__title">
        <a href="" className="card__title-link">
          {title}
        </a>
        <p className="card__title-type">{brand}</p>
        <p className="card__title-cost">
          <span className="cost-deleted">
            <del>{deleteCost}</del>
          </span>
          <span className="cost-active">{cost}</span>
        </p>
      </div>
    </div>
  );
}
