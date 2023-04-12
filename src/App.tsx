import HomePage from "./pages/HomePage";
import { JobPage } from "./pages/JobPage";
import { DataContext, CheckBoxContext } from "./providers";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import jobData from "../data";
import { useState } from "react";

function App() {
  const [data, setData] = useState(jobData);
  const [check, setCheck] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="job/:id" element={<JobPage />} />
      </>
    )
  );
  return (
    <>
      <DataContext.Provider value={{ data, setData }}>
        <CheckBoxContext.Provider value={{ check, setCheck }}>
          <RouterProvider router={router} />
        </CheckBoxContext.Provider>
      </DataContext.Provider>
    </>
  );
}

export default App;
