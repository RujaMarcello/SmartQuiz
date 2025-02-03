import { ReactNode, FC } from 'react';
import Header from './Header';

type DefaultLayoutType = {
  children: ReactNode;
};

const MyComponent: FC<DefaultLayoutType> = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <div className="absolute top-20 px-5 w-full justify-center flex items-center">{children}</div>
    </div>
  );
};

export default MyComponent;
