import { FC, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "./routes";

export const RootRouting: FC = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => {
            return <Route path={route.path} element={route.element} key={index} />;
          })}
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
