'use client';

import styles from './Product.module.css';
import ProductForm from './ProductForm';
import { ChangeEvent, useState } from 'react';
import { CommonTable, ContentBox } from '@/components';
import { IProduct } from '@/types/productTypes';
import { IColumns, IDatas } from '@/components/table/CommonTable';

const headers: IColumns[][] = [
  [
    { key: 'no', label: 'No' },
    { key: 'name', label: '명칭' },
    { key: 'price', label: '가격' },
    { key: 'diameter', label: '지름' },
    { key: 'height', label: '높이' },
    { key: 'option1', label: '옵션1' },
  ],
];

const defaultProduct: IProduct = {
  id: 0,
  name: '',
  price: 0,
};

const ProductManagement = ({ products }: { products: IDatas[] }) => {
  const [dataGroups, setDataGroups] = useState<IDatas[]>(products);
  const [currentProduct, setCurrentProduct] =
    useState<IProduct>(defaultProduct);
  const editCurrentProduct = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    const editedProduct = { ...currentProduct, [name]: value };

    setCurrentProduct(editedProduct);
  };

  console.log(products);

  return (
    <div className={styles.managementContainer}>
      <ProductForm
        product={currentProduct}
        setProduct={editCurrentProduct}
      />
      <ContentBox width="70" height="100" title="테이블">
        <CommonTable columnGroups={headers} dataGroups={dataGroups} />
      </ContentBox>
    </div>
  );
};

export default ProductManagement;
