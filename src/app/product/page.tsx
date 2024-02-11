import Content from "@/components/content/Content";
import ProductChartArea from "@/features/product/ProductChartArea";
import ProductManagementArea from "@/features/product/ProductManagementArea";

const ProductPage = () => {
  return (
    <Content title="품목관리">
      <div className="py-2 flex flex-col gap-y-3 flex-grow">
        <ProductChartArea />
        <ProductManagementArea />
      </div>
    </Content>
  );
};

export default ProductPage;
