import { useEffect, useState } from "react";
import {Container, Grid} from "@mui/material";
import SearchEventsBar from "./SearchEventsBar";
import PublicEventCard from "./PublicEventCard";

const dateNow = new Date();
const year = dateNow.getFullYear();
let month = dateNow.getMonth() + 1;
if (month < 10) {
  month = `0${month}`;
}

const formattedDate = `${year}-${month}`;
const eventDate = `https://do.diba.cat/api/dataset/actesturisme_es/camp-data_inici-like/${formattedDate}`;
const imgExample = `https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3538&q=80`;


function PublicEventsList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [titleFilter, setTitleFilter] = useState("");
/*   const [dateFilter, setDateFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState(""); */

  const findEvents = ({title,/*  date, price */}) => {
    setTitleFilter(title);
/*     setDateFilter(date)
    setPriceFilter(price) */
  };

  useEffect(() => {
    fetch(eventDate)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // tuve que pausar la muestra limitada para poder probar el search
        /*   const limitedData = data.elements.slice(0, 9);
        setData(limitedData); */
        //IMPORTANTE LA LOGICA DE DONDE VIENEN LOS EVENTOS DEBE VENIR DEL BACK, ELLOS PROVEERAN LA URL DE LA UE SE HARA FETCH
        setData(data.elements);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
 return (
    <div className="bg-white font-sans p-8">
      <header className="bg-white-500 py-2  text-blue-500 text-center hover:text-blue-800">
        <Stack justifyContent='left'> 
          <ButtonHome/>
        </Stack>
        <h1 className="text-3xl font-semibold">Barcelona Local Events</h1>
      </header>

      <SearchEventsBar onSearch={findEvents} />
      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            {data
              .filter((event) =>
                event.titol.toLowerCase().includes(titleFilter.toLowerCase()) ||
                event.descripcio.toLowerCase().includes(titleFilter.toLowerCase())
              )
/*               .filter((event)=>{
                event.data_inici.includes("") || 
                event.data_inici.includes(dateFilter)
              })
              .filter((event)=>{
                event.data_inici.includes("") || 
                event.data_inici.includes(priceFilter)
              }) */
              .map((event) => (
                <Grid item xs={4} key={event.acte_id}>
                  <PublicEventCard
                    image={
                      event.imatge && event.imatge.length > 0
                        ? event.imatge
                        : imgExample
                    }
                    title={event.titol}
                    description={event.descripcio}
                    initialDate={event.data_inici}
                    finalDate={event.data_fi}
                    urlEvent={event.url_general}
                    price={
                      event.preu === "Activitat gratuita"
                        ? "Free"
                        : "Paid Activity"
                    }
                  />
                </Grid>
              ))}
          </Grid>
        </Container>
      )}
    </div>
  );
}

export default PublicEventsList;
