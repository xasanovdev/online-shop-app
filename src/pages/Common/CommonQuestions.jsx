import React from 'react';
import { useForm } from 'react-hook-form';
import Accordion from '../../components/Acordion/Accordion';

export default function CommonQuestions() {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container faq">
      <div className="faq__header">
        <h1 className="faq__title">Популярные вопросы</h1>
      </div>
      <div className="faq__content">
        <div className="faq__left">
          <p className="faq__subtitle">ПОКУПКИ</p>
          <Accordion />
          <p className="faq__subtitle">ВОЗВРАТ И ОБМЕН</p>
          <Accordion />
        </div>
        <div className="faq__right">
          <form className="faq__form" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="form__title">
              Есть вопросы или предложения? НАПИШИТЕ НАМ
            </h1>
            <label>
              <input
                {...register('name', { required: true })}
                type="text"
                placeholder="Имя"
              />
            </label>
            <label>
              <input
                {...register('email', { required: true })}
                type="text"
                placeholder="E-mail"
              />
            </label>

            <textarea
              placeholder="Текс сообщения"
              {...register('text', { required: true })}
            ></textarea>
            <button className="btn btn__buy" type="submit">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
