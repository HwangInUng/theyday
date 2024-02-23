import { PropsWithChildren } from 'react';
import styles from '../Common.module.css';

interface ItitleProps {
  title: string;
}

const Content = ({ title, children }: PropsWithChildren<ItitleProps>) => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.contentTitle}>{title}</div>
      {children}
    </div>
  );
};

export default Content;
