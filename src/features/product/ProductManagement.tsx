'use client';

import styles from './Product.module.css';
import ProductForm from './ProductForm';
import { ChangeEvent, useState } from 'react';
import { CommonTable, ContentBox } from '@/components';
import { IProduct } from '@/types/productTypes';

const headers = [
  [
    { key: 'no', label: 'No' },
    { key: 'name', label: '명칭' },
    { key: 'price', label: '가격' },
    { key: 'diameter', label: '지름' },
    { key: 'height', label: '높이' },
    { key: 'option1', label: '옵션1' },
  ],
];

const datas = [
  {
    id: 1,
    name: '케이크 1호',
    price: 45000,
    diameter: 17,
    height: 25,
    option1: '옵션 테스트',
  },
  {
    id: 2,
    name: '케이크 2호',
    price: 30000,
    diameter: 23,
    height: 20,
    option1: '옵션 테스트2',
  },
  {
    id: 3,
    name: '케이크 3호',
    price: 39000,
    diameter: 20,
    height: 17,
    option1: '옵션 테스트3',
  },
];

const defaultProduct: IProduct = {
  name: '',
  price: 0,
  diameter: 0,
  height: 0,
  option1: '',
};

const ProductManagement = () => {
  const [dataGroups, setDataGroups] = useState<
    {
      [key: string]: string | number;
    }[]
  >(datas);
  const [currentProduct, setCurrentProduct] =
    useState<IProduct>(defaultProduct);
  const editCurrentProduct = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    const editedProduct = { ...currentProduct, [name]: value };

    setCurrentProduct(editedProduct);
  };

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
