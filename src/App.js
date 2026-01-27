import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


import Home from './Pages/Home/Home.js'
import Error from "./Pages/Error/Error.js";
import Program from "./Pages/Program/Program.js";
import Sponsors from "./Pages/Sponsors/Sponsors.js";
import Fotter from "./Components/Fotter/Fotter.js";
import Navigation from "./Components/Navigation/Navigation.js";
import Rodo from './Pages/RODO/Rodo.js'
import Attachments from './Pages/Attachments/Attachments.js'

const links = [
  {
      path:"/",
      element:<Home />,
      name:"/"
  },
  {
    path:"/program",
    element:<Program />,
    name:"Program"
  },
  {
    path:"https://forms.office.com/Pages/ResponsePage.aspx?id=6yYO676_0keekOvSQm2863bOxJRbfDBPipj0K9bWj05UNFBOMEk5U0RZTUJBSjRKOVZaTU1RQks5SS4u",
    element:<></>,
    name:"Attend"
  },
  {
    path:"/partners",
    element: <Sponsors />,
    name:"Partners"
  },
  {
    path:"/Rodo",
    element: <Rodo />,
    name:"TOC"
  },
  {
    path:"/attachments",
    element:<Attachments />,
    name:"Attachments"
  
  }
]

function Layout() {
  return (
      <>
        <Navigation links={links}/>
        <Outlet />
        <Fotter links={links}/>
      </>
  );
}

const Router = createBrowserRouter([
  {
    element: <Layout />,
    children:[...links,
      {
        path:"/*",
        element:<Error />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={Router}/>
  );
}

export default App;
