import { ReactNode, lazy } from "react";

const Home = lazy(() => import("pages/Home").then((m) => ({ default: m.Home })));
const Profile = lazy(() => import("pages/Profile").then((m) => ({ default: m.Profile })));
const Following = lazy(() =>
  import("pages/Following").then((m) => ({ default: m.Following }))
);
const Search = lazy(() => import("pages/Search").then((m) => ({ default: m.Search })));
const Upload = lazy(() => import("pages/Upload").then((m) => ({ default: m.Upload })));
const DefaultLayout = lazy(() =>
  import("layouts/DefaultLayout").then((m) => ({ default: m.DefaultLayout }))
);
const HeaderOnly = lazy(() =>
  import("layouts/HeaderOnly").then((m) => ({ default: m.HeaderOnly }))
);

export type RouteProps = {
  path: string;
  element: ReactNode;
};

export const publicRoutes: RouteProps[] = [
  {
    path: "/",
    element: (
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    ),
  },
  {
    path: "/following",
    element: (
      <DefaultLayout>
        <Following />
      </DefaultLayout>
    ),
  },
  {
    path: "/profile",
    element: (
      <DefaultLayout>
        <Profile />
      </DefaultLayout>
    ),
  },
  {
    path: "/upload",
    element: (
      <HeaderOnly>
        <Upload />
      </HeaderOnly>
    ),
  },
  {
    path: "/search",
    element: <Search />,
  },
];

export const privateRoutes = [];
