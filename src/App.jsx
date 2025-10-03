import React from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Components/AppLayout'
import ErrorPage from './Pages/ErrorPage'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ResourcePage from './Pages/ResourcePage'
// import SignUpPage from './Pages/SignUpPage'
import LoginPage from './Pages/LoginPage'
import { AuthProvider } from './Context/AuthContext'
import HospitalLocation from './Pages/HospitalLocation'
import SecondSignUpPage from './Pages/SecondSignUpPage'


const Root = () => {
  return (
    <AuthProvider>
      <AppLayout />
    </AuthProvider>
  );
};

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path:"/home",
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'resource',
        element: <ResourcePage />
      },
      {
        path: 'signup',
        element: <SecondSignUpPage/>
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'emergency',
        element: <HospitalLocation/>
      },
    ]
  }
]);


const App = () => {
  return (
    <>
    <RouterProvider router={Router}/>
    </>
  )
}

export default App