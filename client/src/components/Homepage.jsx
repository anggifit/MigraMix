import ArtistProfile from "../components/ArtistProfile";
import Header from "../components/Header";
import Footer from "./Footer";
import MixEventsList from "./MixEvents/MixEventsList";

const Homepage = () => {
  return (
    <div>
      <div className="opacity-90 bg-white absolute inset-0"></div>
      <div className="relative">
        <Header />
        <ArtistProfile/>
        <MixEventsList/>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
