import React from 'react';
import {BrowserRouter, Route, Routes,} from 'react-router-dom';
import {PortfolioApp} from './containers/portfolio';
import {LoginPage, ProtectedRoute} from "./components";
import {Provider} from "react-redux";
import { store} from './store';
import {useAuth} from "./hooks";
import {NestedApp} from "./containers/app";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <WrappedApp/>
      </BrowserRouter>
    </Provider>
  )
}

export const WrappedApp: React.FC = () => {
  const {isAuthenticated} = useAuth();

  return (
    <Routes>
      <Route path="login" element={<LoginPage/>}/>
      <Route path={"portfolio"} element={<PortfolioApp appPath={"portfolio"}/>}>
      </Route>

      <Route path={"jl"} element={<ProtectedRoute isAuthenticated={isAuthenticated} redirectTo={"/login"}>
        <NestedApp appPath={"jl"}/>
      </ProtectedRoute>}>

      </Route>
    </Routes>
  );
};
