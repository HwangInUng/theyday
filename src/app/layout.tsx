import type { Metadata } from 'next';
import './globals.css';
import { SideNavigation } from '@/components';
import { RecoilRootWrapper } from '@/atoms';

export const metadata: Metadata = {
  title: {
    template: '%s | theyday',
    default: 'admin',
  },
  description: 'cake-admin dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RecoilRootWrapper>
          <div className="flex w-screen h-screen">
            <SideNavigation />
            <div className="flex-grow bg-neutral-50">{children}</div>
          </div>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
