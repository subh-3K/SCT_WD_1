import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Abount from './components/About/Abount.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
//Method-1
const router= createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<Abount/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"user/:userid",
        element:<User/>
      },
      {
        path:"github",
        element:<Github/>
      }
    ]
  }
])
//Method-2
/*const router=createBrowserRouter(
createRoutesFromElements(
<Route path='/' element{<Layout/>}>
<Route path='' element{<Home/>}/>
<Route path='about' element{<Abount/>}/>
<Route path='contact' element{<Contact/>}/>
</Route>
)
)*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
