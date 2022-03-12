import { Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";
import DjangoImage from "../../../static/django_logo.png";
import ReactImage from "../../../static/react_logo.png";
import StyledButton from "../../UI/StyledButton";

const ProjectsPage = () => {
  return (
    <Grid container p={"1rem"} spacing={"1rem"}>
      <Grid item xs={12} align="center">
        <Grid item xs={8} align="left">
          <Card>
            <CardMedia
              component="img"
              height="250"
              image={DjangoImage}
              alt="django logo"
            />
            <CardContent>
              <Grid container spacing={"1rem"}>
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    WDW Dining Alerts - Django Web App
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Background:</Typography>
                  <Typography variant="body1">
                    Walt Disney World is a the most popular theme park in the
                    world. During their stay, guests can place reservations at
                    restaurants throught the resort. The issues is many of the
                    restaurants are VERY popular and have no seating at all.
                    However, there are some spots that periodically become open
                    if someone cancels a reservation or more spots are released.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Use Case:</Typography>
                  <Typography variant="body1">
                    This web application allows guests to select a restaurant, a
                    date and a time for which they want to receive availablility
                    alerts. In the backend, asynchronous workers hit the Walt
                    Disney World API every 30 mins to check for dinning
                    availability. If available, the user will receive an email
                    notification
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Challenges</Typography>
                  <Typography variant="body1">
                    <ul>
                      <li>
                        Constantly changing list of restaurants and special
                        pop-up events. Created jobs to dynamically update these
                        fields
                      </li>
                      <li>
                        Designing an application that was superior to existing
                        alternatives. That's why I made this tool free, with no
                        sign-up required.
                      </li>
                      <li>
                        Required proxy to access Disney API, which ended up
                        being extremely expensive. Because of the over 400 000
                        restaurant combinations, I had to make API requests for
                        each individual reservation (caching results was not
                        possible). In the beginning this worked out alright, but
                        when I had reached 200 active availability requests it
                        was costing too much money
                      </li>
                    </ul>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Details</Typography>
                  <Typography variant="body1">
                    <ul>
                      <li>Django web application using boostrap framework</li>
                      <li>
                        Beautiful UI that allows users to manage their
                        reservation alerts
                      </li>
                      <li>Use of Celery asynchronous task workers</li>
                      <li>
                        Job status monitoring and scheduling using Celery Beat{" "}
                      </li>
                      <li>Use of commercial proxy</li>
                      <li>Alert customers by sending automatic emails</li>
                    </ul>
                  </Typography>
                </Grid>
                <Grid item>
                  <StyledButton text="See More" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={12} align="center">
        <Grid item xs={8} align="left">
          <Card>
            <CardMedia
              component="img"
              height="250"
              image={ReactImage}
              alt="react logo"
            />
            <CardContent>
              <Grid container spacing={"1rem"}>
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    About Me - React App
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Background:</Typography>
                  <Typography variant="body1">
                    I wanted a way to create a sort of <i>digital resume</i> to
                    complement my traditional 1-page resume. I also loved the
                    idea of showing people my skills through a fun personal
                    project, rather than by listing bullet points on a piece of
                    paper.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Challenges</Typography>
                  <Typography variant="body1">
                    <ul>
                      <li>Focusing on every small UI detail</li>
                      <li>
                        Learning a new way to structure the front end using
                        Material UI Grids
                      </li>
                    </ul>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Details</Typography>
                  <Typography variant="body1">
                    <ul>
                      <li>React web application</li>
                      <li>Hosted using GitHub Pages</li>
                      <li>Heavy usage of Material UI library</li>
                      <li>Uses react-pdf library</li>
                    </ul>
                  </Typography>
                </Grid>
                <Grid item>
                  <StyledButton text="See More" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectsPage;
