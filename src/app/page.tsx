import ContentBox from "@/components/content/ContentBox";

export default function Home() {
  const title = [
    "누적 판매량 BEST",
    "00년 판매량 BEST",
    "00월 판매량 BEST",
    "00월 판매량 WORST",
  ];
  return (
    <div className="p-3 pl-5 h-full flex flex-col">
      <div className="text-[1.5rem] text-slate-500 h-[50px]">title</div>
      <div className="py-2 flex flex-col gap-y-3 flex-grow">
        <div className="flex justify-between">
          {title.map((t) => (
            <ContentBox key={t} width={24} height={200}>
              <div className="text-[1rem] px-2 py-1">{t}</div>
              <div className="flex-grow bg-orange-50 flex items-center justify-center">
                그래프 자리
              </div>
            </ContentBox>
          ))}
        </div>
        <div className="flex justify-between flex-grow gap-x-2">
          <div className="border-orange-100 border rounded-lg w-[30%] flex-shrink-0 h-full shadow-md shadow-orange-50 flex flex-col">
            입력필드
          </div>
          <div className="border-orange-100 border rounded-lg flex-grow h-full shadow-md shadow-orange-50 flex flex-col">
            테이블
          </div>
        </div>
      </div>
    </div>
  );
}
