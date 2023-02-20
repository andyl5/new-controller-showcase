import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

// pages
import Home from './pages/Home'
import About from './pages/About'
import ErrorPage from "./pages/ErrorPage.js"
import Nintendo from "./pages/Nintendo"

// test components
import Gamecube from "./pages/Gamecube";

// layouts
import NavbarLayout from './layouts/NavbarLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavbarLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>

      {/* Nintendo and Gamecube must be sibling routes. Nested routes render both the parent and child. */}
      {/* <Route path="Nintendo" element={<Nintendo/>}/> */}
      <Route path=":_brand" element={<Nintendo/>}/>
      <Route path=":_brand/:_console" element={<Gamecube/>}/>



      <Route path="*" element={<ErrorPage/>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;