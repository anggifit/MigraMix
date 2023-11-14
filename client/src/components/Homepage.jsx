import ArtistProfile from "../components/ArtistProfile";
import Header from "../components/Header";
import Footer from "./Footer";
import MixEventsSection from "./MixEvents/MixEventsSection";

const Homepage = () => {
  return (
    <div>
      <div></div>
      <div className="relative">
        <Header />
        <ArtistProfile/>
        <MixEventsSection/>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
