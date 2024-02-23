import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { bodySelector, themesSelector } from 'redux/Contacts/selector';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Loyout/Loyout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from "redux/Auth/operations";
import { useAuth } from "./hooks/useAuth";
import Loader from "./Loader/Loader";
import { GlobalStyle } from "GlobalStyle";


const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/Registr'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export function App() {

  const themes = useSelector(themesSelector);
  // const bodyColor = useSelector(bodySelector);
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const bodyImg = useSelector(bodySelector);

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

  return isRefreshing ? (
    <Loader></Loader>
  ) : (
    <>
  <GlobalStyle backgroundImage={bodyImg}></GlobalStyle>
      <ThemeProvider theme={{ themes }} >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
              }
            />
          </Route>
        </Routes>
      </ThemeProvider >
      </>
 
  );
}
