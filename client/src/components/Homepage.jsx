import { lazy, Suspense } from 'react';
import ArtistSlider from "../components/ArtistSlider";
import Header from "../components/Header";
import Footer from "./Footer";


const Homepage = () => {
  const MixEventsSection = lazy(() => import('./MixEvents/MixEventsSection'));
  return (
    <div>
      <div></div>
      <div className="relative">
        <Header />
        <ArtistSlider/>
        <Suspense fallback={<p>Loading...</p>}>
          <MixEventsSection/>
        </Suspense>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
