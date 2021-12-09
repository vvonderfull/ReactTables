import React, { ReactElement } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
// import { useTypedSelector } from "./hooks/useTypedSelector";
import Auth from "./layouts/Auth/Auth";
import Main from "./layouts/Main/Main";
import StudentsView from "./views/StudentsView/StudentsView";
import RatingsView from "./views/RatingsView/RatingsView";
import SubjectsView from "./views/SubjectsView/SubjectsView";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Main />
            </RequireAuth>
          }
        >
          <Route path="students" element={<StudentsView />} />
          <Route path="ratings" element={<RatingsView />} />
          <Route path="subjects" element={<SubjectsView />} />
          <Route path="/" element={<Navigate to="students" />} />
        </Route>
      </Routes>
    </Provider>
  );
};

function RequireAuth({ children }: { children: ReactElement }) {
  // const { token } = useTypedSelector((state) => state.auth);
  let location = useLocation();

  if (!localStorage.getItem("token"))
    return <Navigate to="/login" state={{ from: location }} />;

  return children;
}

export default App;
