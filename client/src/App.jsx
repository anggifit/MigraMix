import { useState } from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from "./components/Homepage";
import ButtonLogin from "./components/ButtonLogin";
import ButtonExplore from "./components/ButtonExplore";
import SignInForm from "./components/SignInForm";
/* import SignUpRoute from "./components/SignUpRoute";
 */import SignUpForm from "./components/SignUp/SignUpForm";
import PublicEvents from "./components/PublicEventsSection/PublicEvents"
import ArtistsPage from "./components/ArtistsSection/ArtistsPage" 
import ArtistDashboard from "./components/ArtistDashboard/ArtistDashboard";
import EventPlannerDashboard from "./components/EventPlannerDashboard/EventPlannerDashboard"
import UserContext from "./components/UserContext";
import AdminDashboard from "./components/AdminDashboard";

const App = () => {
  const [role, setRole] = useState(localStorage.getItem("role") || '')

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>,
    },
    {
      path: "/api/artistsPage",
      element: <ArtistsPage/>
    },
    {
      path: "/api/sign-in",
      element: <SignInForm/>,
    },
    {
      path: "/api/sign-up",
      element: <SignUpForm />
    },
    {
      path: "/admin-dashboard",
      element: <AdminDashboard/>
    },
    {
      path:"/artists/artists",
      element: <ArtistDashboard/>
    },
    {
      path:"/organizers/organizer",
      element: <EventPlannerDashboard/>
    },
    {
      path:"/events/events",
      element: <EventPlannerDashboard/>
    },
    {
      path: "/events",
      element: <PublicEvents/>
    }
  ])

/*   const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath === "/api/sign-up" || currentPath === "/api/sign-in") {
      navigate("/"); // Redirect to the root path
    }
  }, [location.pathname, navigate]); */

  return (
    <UserContext.Provider value={{role, setRole}}>
        <RouterProvider router={router}>
          <ButtonLogin />
          <Homepage />
          <ButtonExplore/>
          <ArtistsPage/>
          <SignInForm/>
          <AdminDashboard/>
        </RouterProvider>
    </UserContext.Provider>
  );
}

export default App
