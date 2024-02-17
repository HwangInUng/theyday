'use client';

import Link from 'next/link';
import {
  BsCake2Fill,
  BsCalendar2WeekFill,
  BsCreditCard2BackFill,
  BsFillBasket3Fill,
} from 'react-icons/bs';
import styles from './SideNavigation.module.css';
import { useState } from 'react';

interface ISideMenu {
  name: string;
  icon: JSX.Element;
  link: string;
}

const menus = [
  { name: '품목관리', icon: <BsCake2Fill />, link: '/product' },
  {
    name: '매출관리',
    icon: <BsCreditCard2BackFill />,
    link: '/expense',
  },
  {
    name: '예약관리',
    icon: <BsCalendar2WeekFill />,
    link: '/reservation',
  },
  {
    name: '재료관리',
    icon: <BsFillBasket3Fill />,
    link: '/ingredient',
  },
];

const SideList = () => {
  const [selectMenu, setSelectMenu] = useState<ISideMenu>();
  const handleSelect = (menu: ISideMenu) => {
    setSelectMenu(menu);
  };
  const isSelect = (menu: ISideMenu) => selectMenu === menu;

  return (
    <ul className={styles.sideList}>
      {menus.map(menu => (
        <Link
          key={menu.name}
          href={menu.link}
          className={
            isSelect(menu)
              ? `${styles.sideLink} ${styles.selectLink}`
              : styles.sideLink
          }
          onClick={() => handleSelect(menu)}
        >
          <div
            className={
              isSelect(menu)
                ? `${styles.sideItem} ${styles.selectItem}`
                : styles.sideItem
            }
          >
            {menu.icon}
            <span>{menu.name}</span>
          </div>
        </Link>
      ))}
    </ul>
  );
};

export default SideList;
