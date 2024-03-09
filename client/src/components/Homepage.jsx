import { lazy, Suspense } from "react";
import ArtistSlider from "../components/ArtistSlider";
import Header from "../components/Header";
import Footer from "./Footer";
import backgroundImage from "../assets/images/backgroundImage.jpg"; // Import your background image

const Homepage = () => {
  const MixEventsSection = lazy(() => import("./MixEvents/MixEventsSection"));

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 0.3, 
    position: "fixed", 
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1, 
    loading:"lazy"
  };

  return (
    <div>
      <div style={backgroundStyle}></div>
      <div className="relative">
        <Header />
        <ArtistSlider />
        <Suspense fallback={<p>Loading...</p>}>
          <MixEventsSection />
        </Suspense>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
