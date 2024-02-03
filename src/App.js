import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


import Home from './Pages/Home/Home.js'
import Error from "./Pages/Error/Error.js";
import Program from "./Pages/Program/Program.js";
import Attend from "./Pages/Attend/Attend.js";
import Sponsors from "./Pages/Sponsors/Sponsors.js";
import Fotter from "./Components/Fotter/Fotter.js";
import Navigation from "./Components/Navigation/Navigation.js";

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
    path:"/attend",
    element:<Attend />,
    name:"Attend"
  },
  {
    path:"/partners",
    element: <Sponsors />,
    name:"Partners"
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
