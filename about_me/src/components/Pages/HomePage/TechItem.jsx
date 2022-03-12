import { Grid } from "@mui/material";

const TechItem = (props) => {
  return (
    <Grid
      container
      item
      justifyContent="center"
      alignItems="center"
      xs={12}
      sm={6}
      md={4}
    >
      <img src={props.image} width="40%" />
    </Grid>
  );
};

export default TechItem;
