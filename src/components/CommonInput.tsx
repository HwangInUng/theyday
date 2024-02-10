import styles from "./Common.module.css";

interface IInputProps {
  id?: string;
  type: string;
  onChange?: () => void;
}

const CommonInput = ({ id, type, onChange }: IInputProps) => {
  return <input id={id} type={type} className={styles.commonInput} />;
};

export default CommonInput;
