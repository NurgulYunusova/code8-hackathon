import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/Routes";

function App() {
  return (
    <>
      <Routes>
        {routes &&
          routes.map((route, key) => {
            return (
              <Route key={key} path={route.path} element={route.element} />
            );
          })}
      </Routes>
    </>
  );
}

export default App;
