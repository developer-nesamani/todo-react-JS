import { createBrowserRouter, RouterProvider } from "react-router";

const AppLayout = () => {
  <div key={Math.random()}>
    <h1>Hi, Guys..</h1>
  </div>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
]);

function RouterSettings() {
  return <RouterProvider router={router} />;
}

export default RouterSettings;
