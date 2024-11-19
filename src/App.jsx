import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { useEffect } from "react";
import Project from "./pages/Project";

function App() {
  // useEffect(() => {
  //   AOS.init({
  //     // Global settings here...
  //   });
  // }, []);
  return (
    <div className="App">
      <Routes>
        <Route element={<RootLayout />}>
          <Route
            path="/test"
            element={
              // <RootLayout>
              <Home />
              // </RootLayout>
            }
          />
          <Route
            path="/project"
            element={
              // <RootLayout>
              <Project />
              // </RootLayout>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
