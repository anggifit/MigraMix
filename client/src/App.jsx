import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import ButtonLogin from "./components/ButtonLogin";
import ButtonExplore from "./components/ButtonExplore";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUp.jsx/SignUpForm";
import PublicEvents from "./components/PublicEventsSection/PublicEvents"
import ArtistsPage from "./components/ArtistsSection/ArtistsPage" 
import ArtistDashboard from "./components/ArtistDashboard/ArtistDashboard";
import EventPlannerDashboard from "./components/EventPlannerDashboard/EventPlannerDashboard"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "/api/sign-in",
    element: <SignInForm/>,
  },
  {
    path: "/api/sign-up",
    element: <SignUpForm/>
  },
  {
    path:"/DashboardArtist",
    element: <ArtistDashboard/>
  },
  {
    path:"/EventPlannerDashboard",
    element: <EventPlannerDashboard/>
  },
  {
    path: "/events",
    element: <PublicEvents/>
  },
  {
    path: "/api/artists",
    element: <ArtistsPage/>
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
