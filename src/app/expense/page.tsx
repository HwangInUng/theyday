'use client';

import { Content, ContentBox, InputWithLabel } from '@/components';
import { Metadata } from 'next';
import { ChangeEvent } from 'react';

// export const metadata: Metadata = {
//   title: '매출관리',
// };

const ExpensePage = () => {
  return (
    <Content title="매출관리">
      <div className="py-2 flex flex-col gap-y-3 flex-grow">
        <div className="flex gap-x-2">
          <ContentBox width="30" height={250} title="이번달 매출">
            test
          </ContentBox>
          <ContentBox width="70" height={250} title="월별 매출">
            test
          </ContentBox>
        </div>
        <div>
          <ContentBox width="100" height={100} title="매출등록">
            매출 입력 폼
          </ContentBox>
        </div>
        <div className="flex-grow">
          <ContentBox width="100" height="100" title="매출현황">
            테이블 위치
          </ContentBox>
        </div>
      </div>
    </Content>
  );
};

export default ExpensePage;
