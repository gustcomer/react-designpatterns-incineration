import React, { ReactNode } from 'react';

type CenteredLayoutProps = {
  children: ReactNode;
};

const CenteredLayout: React.FC<CenteredLayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      {children}
    </div>
  );
};

export default CenteredLayout;