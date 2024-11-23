import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { FactsPage } from "./pages/Facts/Facts";
import { BeansPage } from "./pages/Beans";
import { RecipesPage } from "./pages/Recipes";
import { CombinationsPage } from "./pages/Combinations";
import { Home } from "./pages/Home";
import { HistoryPage } from "./pages/History";
import { NotFound } from "./pages/NotFound";
import { Loader } from "./components/Loader";
import { BeanPage } from "./pages/BeanPage";

export const router = createBrowserRouter([
  {
    path: "/hw18/",
    element: <Layout />,
    loader: Loader,
    children: [
      { index: true, element: <Home /> },
      {
        path: "beans",
        element: <BeansPage />,
      },
      {
        path: "bean/:id",
        element: <BeanPage />,
      },
      {
        path: "facts",
        element: <FactsPage />,
      },
      { path: "recipes", element: <RecipesPage /> },
      { path: "history", element: <HistoryPage /> },
      {
        path: "combinations",
        element: <CombinationsPage />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);