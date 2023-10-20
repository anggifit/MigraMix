import ArtistProfile from "../components/ArtistProfile";
import Header from "../components/Header";
import Footer from "./Footer";


const Homepage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      // style={{ backgroundImage: `url('images/homepagjpg')` }}
    >
      <div className="opacity-90 bg-white absolute inset-0"></div>
      <div className="relative">
        <Header />
        <ArtistProfile />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
