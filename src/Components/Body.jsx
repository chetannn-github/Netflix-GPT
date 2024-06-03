import React from 'react';
import { Login } from './Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Browse } from './Browse';




export const Body = () => {
 
  const appRouter = createBrowserRouter([
    {
      path:"/login",
      element : <Login/>
    },
    {
      path:"/signup",
      element : <Login/>
    },
    {
      path:"/",
      element:<Browse/>
    },
   
  ])


  return (
  <>
    <RouterProvider router={appRouter}/>
  </>
  )
}
