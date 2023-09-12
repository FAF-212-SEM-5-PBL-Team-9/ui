import { FC, PropsWithChildren } from 'react';

import { Footer, Header } from '@components';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col gap-0 w-screen min-h-screen overflow-auto justify-between">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;