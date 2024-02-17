import { Content } from '@/components';
import { ProductChartArea, ProductManagement } from '@/features';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '품목관리',
};

const ProductPage = () => {
  return (
    <Content title="품목관리">
      <div className="py-2 flex flex-col gap-y-3 flex-grow">
        <ProductChartArea />
        <ProductManagement />
      </div>
    </Content>
  );
};

export default ProductPage;
