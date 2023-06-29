import { FC, ReactNode } from "react";
import { Helmet } from "react-helmet";

import { Container, Footer } from "components";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: FC<LayoutProps> = ({ children, title }) => (
  <>
    <Helmet>
      <title>{title ? `React app | ${title}` : "React app"}</title>
      <link rel="canonical" href="http://localhost:3001" />
    </Helmet>
    <Container>{children}</Container>
    <Footer />
  </>
);

export default Layout;
