/* import { useEffect, useState } from "react";
 */import {Container, Grid} from "@mui/material";
import EventCard from "../PublicEventsSection/EventCard";
import FakeEventsList from './FakeEventsList.json'

/* import axios from "axios";
 */
const MixEventsList = () => {
/*  
  ESTOS SON LOS MANEJO DE ESTADO PARA CUANDO SE TENGA LA RUTA REAL
  const [mixEventsData, setMixEventsData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
*/

  const imgExample = `https://images.unsplash.com/photo-1663245467127-2520ec7bf0ca?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`

  //El siguiente useEffect es para cuando se cambie por la ruta real
  /* useEffect(() => {
    fetchMixEventsData()
    async function fetchMixEventsData() {
      try {
        const response = await axios.get('MigraMix/client/src/components/MixEvents/FakeEventsList.json')
        
        const data = response.data
        setMixEventsData(data)
        setLoading(false)

      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
  }) */

  return (
    <div className="font-sans p-8">  
      {/* NO OLVIDAR COLOCAR ACA EL LOADING Y MANEJO DE ERROR */}
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            {
              FakeEventsList.map((event) => (
                <Grid item xs={4} key={event.id}>
                  <EventCard
                    image={
                      event.eventImage && event.eventImage.length > 0
                        ? event.eventImage
                        : imgExample
                    }
                    title={event.eventTitle}
                    description={event.eventDescription}
                    initialDate={event.initialDate}
                    finalDate={event.finalDate}
                    urlEvent={event.urlEvent}
                    price={
                      event.typeOfActivity === "free"
                        ? "Free"
                        : "Paid Activity"
                    }
                    artist={event.artistEvent}
                  />
                </Grid>
              ))}
          </Grid>
        </Container>
    </div>
  )
}

export default MixEventsList
