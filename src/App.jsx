import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import WelcomeLayout from "./layouts/WelcomeLayout.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

import HomePage from "./pages/HomePage.jsx";
import DynamicContentPage from "./pages/DynamicContentPage.jsx";
import TopicIndexPage from "./pages/TopicIndexPage.jsx";
import NotfoundPage from "./pages/NotfoundPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<WelcomeLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/:topic" element={<MainLayout />}>
        <Route index element={<TopicIndexPage />} />
        <Route path=":subTopic" element={<DynamicContentPage />} />
      </Route>

      {/* catch all */}
        <Route path="404" element={<NotfoundPage />} />

      <Route path="*" element={<NotfoundPage />} />
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
