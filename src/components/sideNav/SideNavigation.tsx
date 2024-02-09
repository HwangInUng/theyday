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
import Link from "next/link";

const SideNavigation = () => {
  const menu = [
    { name: "품목관리", icon: <BsCake2Fill />, link: "/product" },
    { name: "매출관리", icon: <BsCreditCard2BackFill />, link: "/expense" },
    { name: "예약관리", icon: <BsCalendar2WeekFill />, link: "/reservation" },
    { name: "재료관리", icon: <BsFillBasket3Fill />, link: "/ingredient" },
  ];

  return (
    <div className={styles.container}>
      {/* 로고 영역 */}
      <div className={styles.logoBox}>
        <a href="/">
          <Image src={MainLogo} alt="main logo" />
        </a>
      </div>
      {/* /.로고 영역 */}
      {/* 사이드 메뉴 영역 */}
      <div className="flex-grow">
        <ul className={styles.sideList}>
          {menu.map((m, index) => (
            <Link key={index} href={m.link} className={styles.sideLink}>
              <div className={styles.sideItem}>
                {m.icon}
                <span>{m.name}</span>
              </div>
            </Link>
          ))}
        </ul>
      </div>
      {/* /.사이드 메뉴 영역 */}
    </div>
  );
};

export default SideNavigation;
