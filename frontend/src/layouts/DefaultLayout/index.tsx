import { ReactNode, FC } from 'react'
import Header from "./Header";

type DefaultLayoutType = {
  children: ReactNode
}

const MyComponent:FC<DefaultLayoutType> = ({children}) => {
  return (
    <div className="relative">
      <Header/>
      {children}
    </div>
  );
};

export default MyComponent;
