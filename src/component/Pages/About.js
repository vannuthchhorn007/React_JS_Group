import React from 'react';
import { makeStyles, alpha } from '@material-ui/core/styles';
import Header from '../../component/Header';
import { Card, Typography, CardContent, CardHeader, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    gridItem: {
        backgroundColor: 'teal'
    },
    mainGrid: {
        marginTop: '15px'
    }
}));
export default function About() {
    const classes = useStyles();
    return (
        <div><Header />
            <Card>

                <Grid container spacing={4} className={classes.mainGrid} >
                    <Grid item xs={12} md={3} className={classes.gridItem}>
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
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="div">
                                {/* be{bull}nev{bull}o{bull}lent */}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="div">
                                {/* be{bull}nev{bull}o{bull}lent */}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="div">
                                {/* be{bull}nev{bull}o{bull}lent */}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
}