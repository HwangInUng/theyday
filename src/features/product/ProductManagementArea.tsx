import styles from "./Product.module.css";
import ContentBox from "@/components/content/ContentBox";
import ProductForm from "./ProductForm";
import CommonTable from "@/components/table/CommonTable";
import { headers } from "next/headers";

const ProductManagementArea = () => {
  const headers = [
    [
      { key: "no", label: "No" },
      { key: "name", label: "명칭" },
      { key: "price", label: "가격" },
      { key: "option1", label: "옵션1" },
    ],
  ];

  const datas = [
    { no: "1", name: "케이크 1호", price: 45000, option1: "옵션 테스트" },
    { no: "2", name: "케이크 2호", price: 30000, option1: "옵션 테스트2" },
    { no: "3", name: "케이크 3호", price: 39000, option1: "옵션 테스트3" },
    { no: "4", name: "케이크 4호", price: 28000, option1: "옵션 테스트4" },
  ];
  return (
    <div className={styles.managementContainer}>
      <ProductForm />
      <ContentBox width="70" height="100" title="테이블">
        <CommonTable columnGroups={headers} dataGroups={datas} />
      </ContentBox>
    </div>
  );
};

export default ProductManagementArea;
