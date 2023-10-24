import { useEffect, useState } from "react";
import CardExample from "./CardExample";
import {Container, Grid} from "@mui/material";
import { Stack } from "@mui/system";
import SearchEventsBar from "./SearchEventsBar";
import ButtonHome from "./ButtonHome";
import Sample from "./FlippyCard";

const dateNow = new Date();
const year = dateNow.getFullYear();
let month = dateNow.getMonth() + 1;
if (month < 10) {
  month = `0${month}`;
}

const formattedDate = `${year}-${month}`;
const eventDate = `https://do.diba.cat/api/dataset/actesturisme_es/camp-data_inici-like/${formattedDate}`;
const imgExample = `https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

function Apicall() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
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
      <header 
          className="bg-white-500 py-2 text-[#F70808] text-center hover:text-[#712b2b]" 
          style={{ fontFamily: "Audiowide, sans-serif" }}
      >
        <Stack justifyContent='left'> 
          <ButtonHome/>
        </Stack>
        <h1 className="text-5xl font-semibold">Barcelona Local Events</h1>
      </header>

      <SearchEventsBar onSearch={handleSearch} onFilterChange={handleFilterChange} />
      
      {loading ? (
        <div> 
          <p>Loading data...</p>
        </div>
      ) : error ? (
        <div>
          <p>Error: {error.message}</p>
        </div>
      ) : (
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            {filteredData
              .map((event) => (
                <Grid item xs={4} key={event.acte_id}>
                  <Sample
                    className="shadow-2xl"
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

export default Apicall;
