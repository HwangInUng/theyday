import ContentBox from '@/components/content/ContentBox';
import styles from './Product.module.css';

const ProductChart = ({ title }: { title: string }) => {
  return (
    <ContentBox width="25" height={250} title={title}>
      <div className={styles.chartBox}>그래프 자리</div>
    </ContentBox>
  );
};

export default ProductChart;
