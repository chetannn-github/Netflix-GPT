import React from 'react';
import { Login } from './Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Browse } from './Browse';
import MovieInfo from './MovieInfo';





export const Body = () => {
  
 
  const appRouter = createBrowserRouter([
    {
      path:"/login",
      element :<Login/> 
    },
    {
      path:"/signup",
      element : <Login/>
    },
    {
      path:"/",
      element:<Browse/>
    },
    {
      path:"/:id",
      element:<MovieInfo/>
    }
   
  ])


  return (
  <>
    <RouterProvider router={appRouter}/>
  </>
  )
}
