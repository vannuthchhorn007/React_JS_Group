import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    },
    root: {
    flexGrow: 1,
    },
  }),
);

export default function FullWidthGrid() {
const classes = useStyles();

return (
	<div style={{ width: '99%', backgroundColor: '#E6E6FA',padding: '10px' }}>
    <Grid container spacing={3}>
      {/* ++++++++++++++++++++++++++++++++++++++++++++++ */}
      <Grid item xs={6} sm={3}>
      <div style={{}}>
        <Card
          style={{
          width: 350,
          backgroundColor: "orange",
          }}
        >
          <CardContent>
            <Typography
              style={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            >
              {/* <img src={oppo_Reno5} className="App-logo" alt="oppo_Reno5" size="40px"/> */}
              Greetings of the day
            </Typography>
            <Typography variant="h5" component="h2">
              How are you ?
            </Typography>
            <Typography
              style={{
              marginBottom: 12,
              }}
              color="textSecondary"
            >
            </Typography>
            <Typography variant="body2" component="p">
              Stay Happy
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Stay Safe.....</Button>
          </CardActions>
        </Card>
        
        </div>
        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      </Grid>
      <Grid item xs={6} sm={3}>
      <div style={{}}>
        <Card
          style={{
          width: 350,
          backgroundColor: "orange",
          }}
        >
          <CardContent>
            <Typography
              style={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            >
              {/* <img src={oppo_Reno5} className="App-logo" alt="oppo_Reno5" /> */}
              Greetings of the day
            </Typography>
            <Typography variant="h5" component="h2">
              How are you ?
            </Typography>
            <Typography
              style={{
              marginBottom: 12,
              }}
              color="textSecondary"
            >
            </Typography>
            <Typography variant="body2" component="p">
              Stay Happy
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Stay Safe.....</Button>
          </CardActions>
        </Card>
        
        </div>
      </Grid>
      {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <Grid item xs={6} sm={3}>
      <div style={{}}>
        <Card
          style={{
          width: 350,
          backgroundColor: "orange",
          }}
        >
          <CardContent>
            <Typography
              style={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            >
              {/* <img src={oppo_Reno5} className="App-logo" alt="oppo_Reno5" /> */}
              Greetings of the day
            </Typography>
            <Typography variant="h5" component="h2">
              How are you ?
            </Typography>
            <Typography
              style={{
              marginBottom: 12,
              }}
              color="textSecondary"
            >
            </Typography>
            <Typography variant="body2" component="p">
              Stay Happy
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Stay Safe.....</Button>
          </CardActions>
        </Card>
        
        </div>
      </Grid>
      {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <Grid item xs={6} sm={3}>
      <div style={{}}>
        <Card
          style={{
          width: 350,
          backgroundColor: "orange",
          }}
        >
          <CardContent>
            <Typography
              style={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            >
              {/* <img src={oppo_Reno5} className="App-logo" alt="oppo_Reno5" /> */}
              Greetings of the day
            </Typography>
            <Typography variant="h5" component="h2">
              How are you ?
            </Typography>
            <Typography
              style={{
              marginBottom: 12,
              }}
              color="textSecondary"
            >
            </Typography>
            <Typography variant="body2" component="p">
              Stay Happy
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Stay Safe.....</Button>
          </CardActions>
        </Card>
        
        </div>
        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      </Grid>

    </Grid>
	</div>
);
}
