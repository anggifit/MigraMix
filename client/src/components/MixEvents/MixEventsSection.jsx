import MixEventsList from "./MixEventsList"
import SearchEventsBar from "../PublicEventsSection/SearchEventsBar"

const MixEventsSection = () => {
  return (
    <div id="mixEventsSection">
        <SearchEventsBar/>
        <MixEventsList/>
    </div>
  )
}

export default MixEventsSection; 
