import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';
import { AuthPage, DashboardPage, ErrorPage, MyPage, Root, ExpensePage } from './pages';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <DashboardPage /> },
        { path: 'auth', element: <AuthPage /> },
        { path: 'mypage', element: <MyPage /> },
        { path: 'expense', children: [{ path: ':type', elemeent: <ExpensePage /> }] }
      ]
    }
  ]);

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
