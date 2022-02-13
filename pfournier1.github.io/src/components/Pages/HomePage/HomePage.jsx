import { Grid, Typography } from "@mui/material";
import StyledButton from "../../UI/StyledButton";
import portrait from "../../../static/portrait.jpeg";
import BioSection from "../../BioSection/BioSection";
import SchoolIcon from "@mui/icons-material/School";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import FavoriteIcon from "@mui/icons-material/Favorite";

const HomePage = () => {
  return (
    <>
      <Grid container alignItems="center" justifyContent="center" p={"1rem"}>
        <Grid item xs={12} md={4} align="center">
          <img
            src={portrait}
            alt="portrait"
            style={{
              borderRadius: "50%",
              border: "0.5rem solid #E4E1E1",
              height: "15rem",
              justifyContent: "center",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography component="h1">
            Full-Stack Developer & Data Engineer
          </Typography>
          <Typography component="h1">Philip Fournier</Typography>
          <Typography variant="caption">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </Typography>
          <div>
            <StyledButton text="Download CV" />
            <StyledButton style={{ margin: "1rem" }} text="Contact" />
          </div>
        </Grid>
      </Grid>
      <Grid container p={"1rem"}>
        <Grid item xs={12}>
          <Typography component="h1" p={"1rem"}>
            About Me
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <BioSection
            icon={<SchoolIcon />}
            title={"Education"}
            text={"This is my education"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <BioSection
            icon={<DirectionsRunIcon />}
            title={"Sports and Hobbies"}
            text={"This is my sports"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <BioSection
            icon={<FavoriteIcon />}
            title={"Interests"}
            text={"This is my interest"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
