'use client';

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

interface IRecoilRootProps {
  children: ReactNode;
}

const RecoilRootWrapper = ({ children }: IRecoilRootProps) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilRootWrapper;
