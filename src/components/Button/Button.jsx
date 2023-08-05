import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Button({ title, classNameColor }) {
  const { t } = useTranslation();

  return (
    <div>
      <button className={`btn btn__cart ${classNameColor}`}>{title}</button>
    </div>
  );
}
