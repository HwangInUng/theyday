import { ContentBox, InputWithLabel } from '@/components';
import styles from './Product.module.css';

const ProductOption = () => {
  return (
    <div className={styles.optionContainer}>
      <ContentBox title="옵션" width="30" height="100">
        <div className={styles.optionForm}>
          <InputWithLabel
            label="옵션명"
            name="name"
            type="text"
            width="25"
          />
          <InputWithLabel
            label="추가금"
            name="price"
            type="number"
            width="25"
          />
        </div>
      </ContentBox>
    </div>
  );
};

export default ProductOption;
