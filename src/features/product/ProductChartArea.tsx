import ProductChart from "./ProductChart";

const ProductChartArea = () => {
  const titleList = [
    "누적 판매량 BEST",
    "00년 판매량 BEST",
    "00월 판매량 BEST",
    "00월 판매량 WORST",
  ];

  return (
    <div className="flex gap-x-3">
      {titleList.map((title) => (
        <ProductChart key={title} title={title} />
      ))}
    </div>
  );
};

export default ProductChartArea;
