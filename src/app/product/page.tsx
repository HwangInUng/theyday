import ContentBox from "@/components/content/ContentBox";

const ProductPage = () => {
  const title = [
    "누적 판매량 BEST",
    "00년 판매량 BEST",
    "00월 판매량 BEST",
    "00월 판매량 WORST",
  ];

  const field = ["명칭", "원가", "판매가", "지름", "높이"];

  return (
    <div className="p-3 pl-5 h-full flex flex-col">
      <div className="text-[1.5rem] text-slate-500 h-[50px]">품목관리</div>
      <div className="py-2 flex flex-col gap-y-3 flex-grow">
        {/* 상단 콘텐츠 영역 */}
        <div className="flex gap-x-3">
          {title.map((t) => (
            <ContentBox key={t} width="25" height={200} title={t}>
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
            <div className="flex flex-col gap-y-5 py-2">
              {field.map((f) => (
                <div key={f} className="flex justify-between items-center pl-2">
                  <label htmlFor="test" className="w-[25%]">
                    {f}
                  </label>
                  <input
                    type="text"
                    id="test"
                    className="border py-1 pl-1 outline-none flex-grow rounded-md"
                  />
                </div>
              ))}
              <div className="flex items-center justify-center">
                <button className="py-1 px-3 bg-orange-500 text-white rounded-lg opacity-60 hover:opacity-100">
                  저장
                </button>
              </div>
            </div>
          </ContentBox>
          <ContentBox width="70" height="100" title="테이블" />
        </div>
        {/* /.하단 콘텐츠 영역 */}
      </div>
    </div>
  );
};

export default ProductPage;
