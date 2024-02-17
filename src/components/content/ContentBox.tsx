import { PropsWithChildren } from "react";
import styles from "./Content.module.css";

interface IContentBoxProps {
  // string은 %를 적용하기 위해 전달
  width: number | string;
  height: number | string;
  title: string;
}

const ContentBox = ({
  children,
  width,
  height,
  title,
}: PropsWithChildren<IContentBoxProps>) => {
  const customWidth = typeof width === "string" ? `${width}%` : width;
  const customHeight = typeof height === "string" ? `${height}%` : height;

  return (
    <div
      className={styles.container}
      style={{ width: customWidth, height: customHeight }}
    >
      <div className={styles.title}>{title}</div>
      {children}
    </div>
  );
};

export default ContentBox;
