import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../component/Header';
import { Card, Typography, CardContent, CardHeader, Container, Grid, Box } from '@material-ui/core';
import Footer from '../Footer';

const useStyles = makeStyles(theme => ({
    gridItem: {
    },
    mainGrid: {
        marginTop: '15px'
    }
}));
export default function About() {
    const classes = useStyles();
    return (
        <div><Header />
            <Container>
                {/* <Card> */}
                <Grid container spacing={4} className={classes.mainGrid} >
                    <Grid item xs={12} md={3} className={classes.gridItem}>
                        <Card>
                            <CardContent>
                                <CardHeader

                                    title="Shrimp and Chorizo Paella"
                                    subheader="September 14, 2016"
                                />
                                <Box
                                    component="img"
                                    alt="select file"
                                    src="public/images/watch1.png"
                                    sx={{ height: "120px" }}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.gridItem}>
                        <Card>
                            <CardContent>
                                <CardHeader
                                    // avatar={
                                    //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    //     R
                                    //   </Avatar>
                                    // }

                                    title="Shrimp and Chorizo Paella"
                                    subheader="September 14, 2016"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.gridItem}>
                        <Card>
                            <CardContent>
                                <CardHeader
                                    // avatar={
                                    //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    //     R
                                    //   </Avatar>
                                    // }

                                    title="Shrimp and Chorizo Paella"
                                    subheader="September 14, 2016"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.gridItem}>
                        <Card>
                            <CardContent>
                                <CardHeader
                                    // avatar={
                                    //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    //     R
                                    //   </Avatar>
                                    // }

                                    title="Shrimp and Chorizo Paella"
                                    subheader="September 14, 2016"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Container>
            <Footer/>

        </div>
    );
}