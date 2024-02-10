import CommonInput from "./CommonInput";
import styles from "./Common.module.css";

interface ILabelInputProps {
  label: string;
  type: string;
  id: string;
  width: string | number;
}

const InputWithLabel = ({ label, type, id, width }: ILabelInputProps) => {
  const customWidth = typeof width === "string" ? `${width}%` : width;
  return (
    <div key={label} className={styles.inputWrapper}>
      <label htmlFor={id} style={{ width: customWidth }}>
        {label}
      </label>
      <CommonInput type={type} id={id} />
    </div>
  );
};

export default InputWithLabel;
