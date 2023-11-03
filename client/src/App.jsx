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
import UserContext from "./components/UserContext";
import AdminDashboard from "./components/AdminDashboard";

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
    path: "/admin-dashboard",
    element: <AdminDashboard/>
  },
  {
    path:"/api/artists",
    element: <ArtistDashboard/>
  },
  {
    path:"/api/organizer",
    element: <EventPlannerDashboard/>
  },
  {
    path: "/events",
    element: <PublicEvents/>
  },
  {
    path: "/api/artistsPage",
    element: <ArtistsPage/>
  }
])

const App = () => {
  /* const [role, setRole] = useState() */
  const userRole = localStorage.getItem("role")
  /* setRole(userRole) */

/*   const getRole = async () => {
      const role = await fetch ("/api/sign-in")
      const userRole = await role.json()
      setRole(userRole.role)
  }

  useEffect(() => {
    getRole()
  }, []) */

  return (
    <RouterProvider router={router}>
      <ButtonLogin />
      <Homepage />
      <ButtonExplore/>
      <UserContext.Provider value={{userRole}}>
        <AdminDashboard/>
      </UserContext.Provider>
    </RouterProvider>
  );
}

export default App
