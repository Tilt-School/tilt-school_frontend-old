import React from 'react';
import { Sidebar } from 'src/components/sidebar';

type MainLayoutProps = React.PropsWithChildren<Record<string, unknown>>;

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main className='main'>{children}</main>
    </>
  );
};
