import { Container, Grid } from '@mui/material';
import ArtistCard from './ArtistCard';
import data from './ArtistsList.json';

const ArtistsList = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3} justifyContent="center">
                    {data.map((person) =>(
                        <Grid key={person.id} item xs={6}>
                            <ArtistCard
                                image={person.artistProfilePicture}
                                genre={person.musicGenre}
                                user={person.username}
                                bio={person.artistBio}
                                link={person.artistMainLink}
                            />
                        </Grid>
                    ))}
            </Grid>
        </Container>
    )
}

export default ArtistsList
