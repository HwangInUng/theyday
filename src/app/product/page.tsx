import Content from "@/components/content/Content";
import InputWithLabel from "@/components/InputWithLabel";
import ContentBox from "@/components/content/ContentBox";
import CommonButton from "@/components/CommonButton";

const ProductPage = () => {
  const title = [
    "누적 판매량 BEST",
    "00년 판매량 BEST",
    "00월 판매량 BEST",
    "00월 판매량 WORST",
  ];

  const field = ["명칭", "가격", "지름", "높이", "옵션1", "옵션2"];

  return (
    <Content title="품목관리">
      <div className="py-2 flex flex-col gap-y-3 flex-grow">
        {/* 상단 콘텐츠 영역 */}
        <div className="flex gap-x-3">
          {title.map((t) => (
            <ContentBox key={t} width="25" height={250} title={t}>
              <div className="flex-grow bg-orange-50 flex items-center justify-center">
                그래프 자리
              </div>
            </ContentBox>
          ))}
        </div>
        {/* ./상단 콘텐츠 영역 */}
        {/* 하단 콘텐츠 영역 */}
        <div className="flex justify-between flex-grow gap-x-3">
          <ContentBox width="30" height="100" title="품목정보">
            <div className="flex flex-col gap-y-5 py-2 justify-center h-full">
              {field.map((f) => (
                <InputWithLabel
                  key={f}
                  label={f}
                  type="text"
                  id={f}
                  width="25"
                />
              ))}
              <div className="flex items-center justify-center gap-x-2">
                <CommonButton text="저장" color="bg-orange-500" />
                <CommonButton text="삭제" color="bg-red-500" />
              </div>
            </div>
          </ContentBox>
          <ContentBox width="70" height="100" title="테이블" />
        </div>
        {/* /.하단 콘텐츠 영역 */}
      </div>
    </Content>
  );
};

export default ProductPage;
