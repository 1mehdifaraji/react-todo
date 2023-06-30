import { FC, ReactNode } from "react";
import { Helmet } from "react-helmet";

import { Container, Footer, Header } from "components";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: FC<LayoutProps> = ({ children, title: customTitle }) => {
  const title = customTitle ? `React app | ${customTitle}` : "React app";
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href="http://localhost:3001" />
      </Helmet>
      <Header />
      <Container className="mt-20 md:mt-28">{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
