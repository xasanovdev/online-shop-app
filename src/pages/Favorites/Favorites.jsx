import React from 'react';
import { useContext } from 'react';
import { CustomContext } from '../../utils/context';
import FavoritesCard from '../../components/FavoritesCard/FavoritesCard';
import EmptyComposition from '../../components/EmptyComposition/EmptyComposition'

export default function Favorites() {
  const { state, dispatch } = useContext(CustomContext);

  return (
    <section className="favorites">
      <div className="favorites__content container">
        {state.favorites.data.length >0 ? state.favorites.data.map((favorite) => (
            <FavoritesCard
              key={favorite.id}
              id={favorite.id}
              brand={favorite.brand}
              category={favorite.category}
              title={favorite.title}
              img={favorite.img}
              price={favorite.price}
            />
        )) : (
          <EmptyComposition/>
        )
      }
      </div>
    </section>
  );
}
