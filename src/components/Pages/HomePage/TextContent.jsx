import { Grid, Typography } from "@mui/material";

const BioDescription = () => {
  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(1998, 8, 23);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };
  return (
    <>
      <Grid item>
        <Typography variant="body1">
          Hello! I'm a {calculateAge()} year old software developper from
          Montreal, Canada. I love to collaborate and work on engineering
          problems to improve the efficientcy, reliability and maintainability
          of software applications. I'm most happy when I'm challenging myself
          and learning something new every single day.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">
          I've been at Squarepoint Capital since January 2021 where I started as
          an intern and have since become a full-time developper. Throught my
          time here, I've had the opportunity to be part of a 2 year rotational
          program where I've gotten to work on the Alpha Data (creating data
          pipelines), Data Operations (supporting existing data pipelines) and
          Data Platform (designing and developping internal tools) teams.
        </Typography>
      </Grid>
    </>
  );
};

const EducationContent = () => {
  return (
    <Grid container p={"1rem"} spacing={"2rem"}>
      <Grid item xs={12}>
        <Typography variant="h6">McGill University</Typography>
        <Typography variant="body1">
          <ul>
            <li>Double Major in Computer Science and Finance</li>
          </ul>
        </Typography>
        <Typography variant="h6">Marianopolis College</Typography>
        <Typography variant="body1">
          <ul>
            <li>DEC in Pure and Applied Sciences</li>
          </ul>
        </Typography>
        <Typography variant="h6">Charted Financial Analyst (CFA)</Typography>
        <Typography variant="body1">
          <ul>
            <li>Passed Level 1 and Level 2</li>
            <li>Currently studying for Level 3</li>
          </ul>
        </Typography>
      </Grid>
    </Grid>
  );
};

const SportsAndHobbiesContent = () => {
  return (
    <Grid container p={"1rem"} spacing={"2rem"}>
      <Grid item xs={12}>
        <Typography variant="h6">On my spare time I like to ...</Typography>
        <Typography variant="body1">
          <ul>
            <li>Play Volleyball</li>
            <li>Practice Brazilian Jiu-Jitsu</li>
            <li>Watch Hockey (Go Habs Go!)</li>
            <li>Read Non-Fiction</li>
            <li>Play Video Games With Friends</li>
          </ul>
        </Typography>
      </Grid>
    </Grid>
  );
};

const InterestsContent = () => {
  return (
    <Grid container p={"1rem"} spacing={"2rem"}>
      <Grid item xs={12}>
        <Typography variant="h6">I'm intersted in ...</Typography>
        <Typography variant="body1">
          <ul>
            <li>Solving complex problems</li>
            <li>Designing data intensive applications</li>
            <li>Creating simple and beautiful UI applications</li>
            <li>The intersection of finance and computer science</li>
            <li>Learning new things everyday</li>
          </ul>
        </Typography>
      </Grid>
    </Grid>
  );
};

export {
  BioDescription,
  EducationContent,
  SportsAndHobbiesContent,
  InterestsContent,
};
