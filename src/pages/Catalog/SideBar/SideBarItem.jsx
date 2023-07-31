import React, { useContext } from 'react'
import { CustomContext } from '../../../utils/context';

export default function SideBarItem({value,text}) {

  const {category,changeCategory} = useContext(CustomContext)

  return <li onClick={() => changeCategory(value)} className={`sideBar__menu-link ${value === category ? 'active': ''}`}>{text}</li>;
}
