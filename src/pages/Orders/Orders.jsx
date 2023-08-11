import React, { useState } from 'react';
import { useContext } from 'react';
import { CustomContext } from '../../utils/context';
import OrderCard from '../../components/OrderCard/OrderCard';
import EmptyComposition from '../../components/EmptyComposition/EmptyComposition';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Orders() {
  const [address, setAddress] = useState(true);
  const [addressText, setAddressText] = useState('');
  const { state, dispatch } = useContext(CustomContext);
  const { t } = useTranslation();

  const {
    watch,
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    axios
      .post('http://localhost:4444/orders', {
        ...data,
        data: state.orders.data,
        allPrice: state.orders.data.reduce((accumulator, product) => {
          return accumulator + product.price;
        }, 0),
      })
      .then(() => {
        console.log('data ketti hammasi');
        reset();
        dispatch({ type: 'resetOrders' });
      })
      .catch(() => console.log('data ketmadi'))
  };

  return (
    <section className="orders">
      <div className="orders__content container">
        <div className="orders__left">
          <form
            noValidate
            className="orders__form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              {...register('name', { required: true })}
              className="orders__form-input"
              type="text"
              placeholder="Катерина"
            />
            <span>{errors.name && 'Name is required'}</span>
            <input
              {...register('surname', { required: true })}
              className="orders__form-input"
              type="text"
              placeholder="Марюха"
            />
            <span>{errors.surname && 'Surname is required'}</span>
            <input
              {...register('email', {
                required: { message: 'Email is required', value: true },
                pattern: {
                  message: 'This mail is not correct',
                  value: /^[^]+@[^ ]+\.[a-z]{2,5}$/,
                },
              })}
              className="orders__form-input"
              type="text"
              placeholder="katyamaryukha1998@gmail.com"
            />
            <span>{errors.email && errors.email?.message}</span>
            <input
              {...register('number', { required: true })}
              className="orders__form-input"
              type="text"
              placeholder="0 99 790 6151"
            />
            <span>{errors.number && 'this number is required'}</span>

            <p className="form__title">Доставка</p>

            {address ? (
              <>
                <textarea
                  {...register('address', { required: true })}
                  onChange={(e) => setAddressText(e.target.value)}
                  placeholder="Address:"
                ></textarea>
                <span>{errors.address && 'address is required'}</span>
              </>
            ) : (
              <p className="form__text">{addressText}</p>
            )}

            <p
              onClick={() => {
                addressText === '' ? setAddress(address) : setAddress(!address);
              }}
              className="change__deliver"
            >
              {address ? 'soxranit' : 'Редактировать'}
            </p>

            <p className="take__sale">Получить скидку</p>
            <p className="form__title">Способ оплаты</p>
            <label className="form__checkbox">
              <input
                type="radio"
                value="card"
                name="option"
                {...register('pay', { required: true })}
              />
              Карточкой на сайте
            </label>
            <label className="form__checkbox">
              <input
                type="radio"
                name="option"
                value="cash"
                {...register('pay', { required: true })}
              />
              При получении заказа
            </label>
            <span>{errors.pay && 'this label is required'}</span>
            <button type="submit" className="btn btn__cart">
              {t('product.btn1')}{' '}
            </button>
          </form>
        </div>

        <div className="orders__right">
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
            <EmptyComposition>
              <h1>{t('cart.orders')}</h1>
            </EmptyComposition>
          )}
        </div>
      </div>
    </section>
  );
}
