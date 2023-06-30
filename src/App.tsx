import { FC, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Loading } from "components";

const NotFoundPage = lazy(() => import("./pages/404"));
const Home = lazy(() => import("./pages/Home"));
const Task = lazy(() => import("./pages/Task"));
const Add = lazy(() => import("./pages/Add"));

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
      path="/task/:id"
      element={
        <Suspense fallback={<Loading />}>
          <Task />
        </Suspense>
      }
    />
    <Route
      path="/add"
      element={
        <Suspense fallback={<Loading />}>
          <Add />
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
