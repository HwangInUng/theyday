'use client';

import Image from 'next/image';
import styles from './SideNavigation.module.css';
import { MainLogo } from '@/assets';
import SideList from './SideIList';

const SideNavigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <a href="/">
          <Image src={MainLogo} alt="main logo" />
        </a>
      </div>
      <div className="flex-grow">
        <SideList />
      </div>
    </div>
  );
};

export default SideNavigation;
