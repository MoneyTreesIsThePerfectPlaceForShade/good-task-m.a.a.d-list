import React, { FC, ReactElement } from "react";
import { Footer, Header } from "../../widgets";

interface ILayout {
  children: ReactElement;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
