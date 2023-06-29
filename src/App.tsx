import { FC, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Loading } from "components";

const NotFoundPage = lazy(() => import("./pages/404"));
const Home = lazy(() => import("./pages/Home"));

const App: FC = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      }
    />
    <Route
      path="*"
      element={
        <Suspense fallback={<Loading />}>
          <NotFoundPage />
        </Suspense>
      }
    />
  </Routes>
);

export default App;
