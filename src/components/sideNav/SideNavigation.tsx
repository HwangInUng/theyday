"use client";

import Image from "next/image";
import MainLogo from "../../assets/main-logo.png";
import {
  BsCake2Fill,
  BsCalendar2WeekFill,
  BsCreditCard2BackFill,
  BsFillBasket3Fill,
} from "react-icons/bs";
import styles from "./SideNavigation.module.css";

const SideNavigation = () => {
  const menu = [
    { name: "품목관리", icon: <BsCake2Fill /> },
    { name: "매출관리", icon: <BsCreditCard2BackFill /> },
    { name: "예약관리", icon: <BsCalendar2WeekFill /> },
    { name: "재료관리", icon: <BsFillBasket3Fill /> },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <Image src={MainLogo} alt="main logo" />
      </div>
      <div className="flex-grow">
        <ul className={styles.sideList}>
          {menu.map((m, index) => (
            <li key={index}>
              <div className={styles.sideItem}>
                {m.icon}
                <span>{m.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNavigation;
