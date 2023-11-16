import { useState, useEffect } from "react";
import { Container, Grid, Avatar, Typography, Box, Stack} from "@mui/material";
import FestivalIcon from '@mui/icons-material/Festival';
import EventCard from "../PublicEventsSection/EventCard";
import RedButton from "../RedButton";
import axios from "axios";

const MyEventsSection = ({onEditClick}) => {

  const [mixEventsData, setMixEventsData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  const token = localStorage.getItem('token');
  const imgExample = `https://images.unsplash.com/photo-1663245467127-2520ec7bf0ca?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`

  useEffect(() => {
    fetchMixEventsData()
    async function fetchMixEventsData() {
      try {
        const response = await axios.get('http://localhost:4000/events/eventsByOrganizer', {
          headers: {
            Authorization: `Bearer ${token}`, 
            'Cache-Control': 'no-cache',
          }
        })
        
        const data = response.data
        setMixEventsData(data)
        console.log(data[0].id);
        setLoading(false)

      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
  }, [token])

  const deleteEvent = (eventId) => {
    axios.delete(`http://localhost:4000/events/delete-event/${eventId}`, { 
      headers: {
          Authorization: `Bearer ${token}`,
      }
  })
  .then((response) => {
      console.log(response.data)
      if (response.status === 200) {
          console.log("evento eliminado");
      }
  })
  .catch((error) => {console.log(error.data);})
  }

  return (
    <div style={{ height: '100%', width: '100%'}}> 
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              backgroundColor: 'white',
              }}
          >
            <Avatar sx={{ m: 2, bgcolor: '#FF4B4B' }}>
              <FestivalIcon/>
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: '#2B2D42', fontWeight: 'bold'}}>
              My Events
            </Typography>
            <p className="mb-3 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              This information will be displayed publicly so be careful what you share.
            </p>
            <Grid container spacing={3} justifyContent="center" sx={{ padding: 5 }}>
              {loading ? (
                <p>Loading data..</p>
              ) : error ? (
                <p>Error: {error.message}</p>
                ) : (
                  mixEventsData.map((event) => (
                    <Grid item xs={4} key={event.id}>
                      <EventCard
                        image={
                          event.eventimage && event.eventimage.length > 0
                            ? event.eventimage
                            : imgExample
                        }
                        title={event.eventtitle}
                        description={event.eventdescription}
                        initialDate={event.initialdate}
                        finalDate={event.finaldate}
                        urlEvent={event.urlevent}
                        price={
                          event.typeofactivity === "free"
                            ? "Free"
                            : "Paid Activity"
                        }
                        artist={event.artistevent}
                      />
                      <Stack 
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        spacing={8}
                        sx={{ padding: 2 }}
                      >
                          <RedButton 
                              info="Edit Event" 
                              size="small"
                              onClick={() => {
                                onEditClick(event.id)
                              }}
                          />
                          <RedButton 
                              info="Delete Event" 
                              size="small" 
                              type="submit"
                              onClick={() => { 
                                console.log(`Este es el eventId: ${event.id}`)
                                deleteEvent(event.id)  
                              }}
                          />
                        </Stack>
                    </Grid>
                  ))
                )}
            </Grid>
                        
          </Box>
        </Container>
    </div>
  )
}

export default MyEventsSection
