import React, { useContext } from 'react';
import { CustomContext } from '../../../utils/context';
import { useTranslation } from 'react-i18next';
import SideBarItem from './SideBarItem';

export default function SideBar() {
  const { state, changeGender } = useContext(CustomContext);

  const { t } = useTranslation();

  return (
    <aside className="sideBar">
      <div className="sideBar__lang">
        <p
          onClick={() => changeGender('woman')}
          className={`sideBar__lang-link ${
            state.catalog.gender === 'woman' ? 'active' : ''
          }`}
        >
          Женщины
        </p>
        <p
          onClick={() => changeGender('men')}
          className={`sideBar__lang-link ${
            state.catalog.gender === 'men' ? 'active' : ''
          }`}
        >
          Мужчины
        </p>
      </div>
      <ul className="sidebar__menu">
        <SideBarItem value={'t-short'} text={t('catalog.aside3')} />
        <SideBarItem value={'sweatshirts'} text={t('catalog.aside4')} />
        <SideBarItem value={'pants'} text={t('catalog.aside5')} />
        <SideBarItem value={'shoes'} text={t('catalog.aside6')} />
      </ul>
    </aside>
  );
}
