import React from 'react';
import { useContext } from 'react';
import { CustomContext } from '../../utils/context';
import OrderCard from '../../components/OrderCard/OrderCard';
import EmptyComposition from '../../components/EmptyComposition/EmptyComposition';
import { useTranslation } from 'react-i18next';


export default function Orders() {
  const { state } = useContext(CustomContext);
  const {t} = useTranslation()

  return (
    <section className="orders">
      {/* <h1 className="orders__title">{t('cart.orders')}</h1> */}

      <div className="orders__content container">
        {state.orders.data.length > 0 ? (
          state.orders.data.map((order) => (
            <OrderCard
              key={order.id}
              id={order.id}
              brand={order.brand}
              category={order.category}
              title={order.title}
              img={order.img}
              price={order.price}
            />
          ))
        ) : (
          <EmptyComposition />
        )}
      </div>
    </section>
  );
}
