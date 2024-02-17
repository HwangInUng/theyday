import styles from './Common.module.css';

interface IInputProps {
  id?: string;
  type: string;
}

const CommonInput = ({ id, ...props }: IInputProps) => {
  return <input id={id} {...props} className={styles.commonInput} />;
};

export default CommonInput;
