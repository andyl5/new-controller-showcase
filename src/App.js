import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

// pages
import Home from './pages/Home'
import About from './pages/About'
import ErrorPage from "./pages/ErrorPage.js"
import BrandPage from "./pages/BrandPage"
import ConsolePage from "./pages/ConsolePage";
import ControllerPage from "./pages/ControllerPage";

// layouts
import NavbarLayout from './layouts/NavbarLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavbarLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>

      {/* BrandPage and ConsolePage must be sibling routes. Nested routes render both the parent and child. */}
      <Route path=":_brand" element={<BrandPage/>}/>
      <Route path=":_brand/:_console" element={<ConsolePage/>}/>
      <Route path=":_brand/:_console/:_controller" element={<ControllerPage/>}/>



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