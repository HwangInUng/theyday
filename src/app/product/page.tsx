import { Content } from '@/components';
import { ProductChartArea, ProductManagement } from '@/features';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '품목관리',
};

const fetchProduct = async () => {
  const response = await fetch('http://localhost:3000/api/product');

  if (response.ok) {
    const products = await response.json();
    return products;
  }
};
const ProductPage = async () => {
  const products = await fetchProduct();

  return (
    <Content title="품목관리">
      <div className="py-2 flex flex-col gap-y-3 flex-grow">
        <ProductChartArea />
        <ProductManagement products={products} />
      </div>
    </Content>
  );
};

export default ProductPage;
