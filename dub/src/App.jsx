import {
  BrowserRouter,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Frontpage } from "./pages/Frontpage";
import { RootLayout } from "./pages/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Frontpage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
