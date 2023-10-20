import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import ButtonLogin from "./components/ButtonLogin";
import ButtonExplore from "./components/ButtonExplore";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import Apicall from "./components/Apicall";
import ArtistsSearch from "./components/ArtistsSearch";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "/sign-in",
    element: <SignInForm/>,
  },
  {
    path: "/api/sign-up",
    element: <SignUpForm/>
  },
  {
    path: "/events",
    element: <Apicall/>
  },
  {
    path: "/artists",
    element: <ArtistsSearch/>
  }
])

const App = () => {
  return (
    <RouterProvider router={router}>
      <ButtonLogin />
      <Homepage />
      <ButtonExplore/>
    </RouterProvider>
  );
}

export default App
