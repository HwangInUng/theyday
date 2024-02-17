import styles from './Product.module.css';
import CommonButton from '@/components/CommonButton';
import InputWithLabel from '@/components/InputWithLabel';
import ContentBox from '@/components/content/ContentBox';
import { IProduct } from '@/types/productTypes';
import { ChangeEvent } from 'react';

const fieldList = ['명칭', '가격', '지름', '높이', '옵션1', '옵션2'];

const ProductForm = ({
  product,
  setProduct,
}: {
  product: IProduct | undefined;
  setProduct: (e: ChangeEvent<HTMLInputElement>) => void;
}): JSX.Element => {
  return (
    <ContentBox width="30" height="100" title="품목정보">
      <div className={styles.formWrapper}>
        <InputWithLabel
          label="명칭"
          width="25"
          name="name"
          type="text"
          onChange={setProduct}
        />
        <InputWithLabel
          label="가격"
          width="25"
          name="price"
          type="number"
          onChange={setProduct}
        />
        <InputWithLabel
          label="지름"
          width="25"
          name="diameter"
          type="number"
          onChange={setProduct}
        />
        <InputWithLabel
          label="높이"
          width="25"
          name="height"
          type="number"
          onChange={setProduct}
        />
        <InputWithLabel
          label="옵션1"
          width="25"
          name="option1"
          type="text"
          onChange={setProduct}
        />
        <InputWithLabel
          label="옵션2"
          width="25"
          name="option2"
          type="text"
          onChange={setProduct}
        />
        <div className={styles.formButtonWrapper}>
          <CommonButton text="저장" color="bg-orange-500" />
          <CommonButton text="삭제" color="bg-red-500" />
        </div>
      </div>
    </ContentBox>
  );
};

export default ProductForm;
