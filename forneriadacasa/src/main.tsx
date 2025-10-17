import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import PageAddToCard from './layout/PageAddToCard.tsx'
import DefaultLayout from './layout/DefaultLayout.tsx'

const routes = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <DefaultLayout /> }, // ou path: '/'
      { path: 'order', element: <PageAddToCard /> }
    ]
  }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
