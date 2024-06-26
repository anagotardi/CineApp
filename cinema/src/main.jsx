import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageNotFound from './Pages/PageNotFound.jsx'
import Filmes from './Pages/Filmes.jsx'
import Sobre from './Pages/Sobre.jsx'
import Home from './Pages/Home.jsx'

//o nome da constante é o mesmo nome que o router puxará ***
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [
        {index: true, element: <Home/>},
        {path: "filmes", element: <Filmes/> },
        {path: "sobre", element:  <Sobre/>},
        {path: "*", element: <PageNotFound/>}
      ]
    }
  ]
)


//*** 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)