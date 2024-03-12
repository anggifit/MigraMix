import { Grid } from '@mui/material'
import ButtonHome from '../ButtonHome'
const EventsHeader = () => {
    return (
      <Grid
        container        
        
        className="m-6 text-[#F70808]"
        style={{ fontFamily: "Gayathri, sans-serif" }}
      >
        <Grid item xs={12} sm={1} md={1} margin={1}>
          <ButtonHome />
        </Grid>
        <Grid item xs={11} sm={11}>
          <h1 className="text-5xl font-extrabold text-center ">
            Barcelona Local Events
          </h1>
        </Grid>
      </Grid>
    );
}
export default EventsHeader









