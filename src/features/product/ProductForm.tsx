import styles from "./Product.module.css";
import CommonButton from "@/components/CommonButton";
import InputWithLabel from "@/components/InputWithLabel";
import ContentBox from "@/components/content/ContentBox";

const ProductForm = () => {
  const fieldList = ["명칭", "가격", "지름", "높이", "옵션1", "옵션2"];

  return (
    <ContentBox width="30" height="100" title="품목정보">
      <div className={styles.formWrapper}>
        {fieldList.map((field) => (
          <InputWithLabel
            key={field}
            label={field}
            type="text"
            id={field}
            width="25"
          />
        ))}
        <div className={styles.formButtonWrapper}>
          <CommonButton text="저장" color="bg-orange-500" />
          <CommonButton text="삭제" color="bg-red-500" />
        </div>
      </div>
    </ContentBox>
  );
};

export default ProductForm;
