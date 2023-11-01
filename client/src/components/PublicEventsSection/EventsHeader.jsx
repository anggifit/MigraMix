import { Grid } from '@mui/material'
import ButtonHome from '../ButtonHome'


const EventsHeader = () => {
    return (
        <Grid container spacing={2}
            className="p-10 text-[#F70808] hover:text-[#712b2b]"
            style={{ fontFamily: "Audiowide, sans-serif" }}
        >
            <Grid item xs={1}>
                <ButtonHome/>
            </Grid>
            <Grid item xs={11}>
                <h1 className="text-5xl font-semibold text-center">Barcelona Local Events</h1>
            </Grid>
        </Grid>

    )
}

export default EventsHeader