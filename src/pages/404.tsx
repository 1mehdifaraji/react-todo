import { FC } from "react";

import { Layout, PrevPage } from "components";

const NotFoundPage: FC = () => (
  <Layout title="404">
    <div className="flex flex-col items-center justify-center h-64">
      <div>Page not found .</div>
      <PrevPage />
    </div>
  </Layout>
);

export default NotFoundPage;
