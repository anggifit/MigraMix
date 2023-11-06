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
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('')

  const handleSearch = (term) => {
    setSearchTerm (term)
  }

  const handleFilterChange = (type) => {
    setFilterType(type)
  }

  useEffect(() => {
    fetch(eventDate)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.elements);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const filteredData = data.filter((event) => {
    if (filterType === '') {
      return true; 
    } else if (filterType === 'free') {
      return event.preu === 'Activitat gratuïta'; 
    } else if (filterType === 'paid') {
      return event.preu !== 'Activitat gratuïta';
    }

    if (searchTerm.trim() === '') {
      return true;
    }
    return event.titol.toLowerCase().includes(searchTerm.toLowerCase());
  });

 return (
    <div className="bg-white font-sans p-8">
      <SearchEventsBar onSearch={handleSearch} onFilterChange={handleFilterChange} />
      
      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            {filteredData
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
                      event.preu === "Activitat gratuïta"
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
