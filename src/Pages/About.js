import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, Card, CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    section: {
        marginBottom: theme.spacing(4),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const About = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.container}>
            <section className={classes.section}>
                {/* About Section */}
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    About Us
                                </Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia fermentum
                                    odio, vel tempus ligula vestibulum id. Proin vel mi enim. Praesent sollicitudin
                                    lacinia lectus, in facilisis ligula tincidunt ac. Sed consectetur commodo ante ac
                                    convallis.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Our Vision
                                </Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia fermentum
                                    odio, vel tempus ligula vestibulum id. Proin vel mi enim. Praesent sollicitudin
                                    lacinia lectus, in facilisis ligula tincidunt ac. Sed consectetur commodo ante ac
                                    convallis.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </section>
        </Container>
    );
};

export default About;