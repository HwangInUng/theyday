import { PropsWithChildren } from 'react';
import styles from './Common.module.css';

interface IButtonProps {
  text?: string;
  onClick?: () => void;
  color?: string;
}

const CommonButton = ({
  text,
  onClick,
  color,
  children,
}: PropsWithChildren<IButtonProps>) => {
  return (
    <button
      className={`${color} ${styles.commonButton}`}
      onClick={onClick}
    >
      {text ? text : children}
    </button>
  );
};

export default CommonButton;
