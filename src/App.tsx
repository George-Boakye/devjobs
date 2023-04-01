import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { DataContext, CheckBoxContext } from "./providers";
import jobData from "../data";
import { useState } from "react";
function App() {
  const [data, setData] = useState(jobData);
  const [check, setCheck] = useState(false);
  return (
    <>
      <DataContext.Provider value={{ data, setData }}>
        <CheckBoxContext.Provider value={{ check, setCheck }}>
          <Navbar />
          <HomePage />
        </CheckBoxContext.Provider>
      </DataContext.Provider>
    </>
  );
}

export default App;
