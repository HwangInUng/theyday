'use client';

import styles from './Product.module.css';
import CommonButton from '@/components/CommonButton';
import InputWithLabel from '@/components/InputWithLabel';
import ContentBox from '@/components/content/ContentBox';
import { IProduct } from '@/types/productTypes';
import { ChangeEvent } from 'react';

const ProductForm = ({
  product,
  setProduct,
}: {
  product: IProduct | undefined;
  setProduct: (e: ChangeEvent<HTMLInputElement>) => void;
}): JSX.Element => {
  return (
    <ContentBox width="100" height={100} title="품목정보">
      <div className="flex justify-between">
        <div className={styles.productForm}>
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
            label="맛"
            width="25"
            name="taste"
            type="text"
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
        </div>
        <div className={styles.productFormButton}>
          <CommonButton text="저장" color="bg-orange-500" />
          <CommonButton text="삭제" color="bg-red-500" />
        </div>
      </div>
    </ContentBox>
  );
};

export default ProductForm;
