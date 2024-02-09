import { PropsWithChildren } from "react";
import styles from "./Content.module.css";

interface IContentBoxProps {
  width: number;
  height: number;
}

const ContentBox = ({
  children,
  width,
  height,
}: PropsWithChildren<IContentBoxProps>) => {
  return (
    <div
      className={styles.container}
      style={{ width: `${width}%`, height: height }}
    >
      {children}
    </div>
  );
};

export default ContentBox;
