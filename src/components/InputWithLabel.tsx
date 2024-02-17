import CommonInput from './CommonInput';
import styles from './Common.module.css';
import { ChangeEvent } from 'react';

interface ILabelInputProps {
  label: string;
  width: string | number;
  type: string;
  name: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  max?: number;
  min?: number;
}

const InputWithLabel = ({ label, width, ...props }: ILabelInputProps) => {
  const customWidth = typeof width === 'string' ? `${width}%` : width;

  return (
    <div key={label} className={styles.inputWrapper}>
      <label htmlFor={label} style={{ width: customWidth }}>
        {label}
      </label>
      <CommonInput id={label} {...props} />
    </div>
  );
};

export default InputWithLabel;
