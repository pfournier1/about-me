import { Grid, Typography, Tooltip } from "@mui/material";
import StyledButton from "../../UI/StyledButton";
import { useSpring, animated } from "react-spring";
import TechItem from "./TechItem";
import {
  BioDescription,
  EducationContent,
  SportsAndHobbiesContent,
  InterestsContent,
} from "./TextContent";
import BioSection from "./BioSection";
import resume from "../../../static/resume.pdf";
//icons and pictures
import portrait from "../../../static/portrait.jpg";
import SchoolIcon from "@mui/icons-material/School";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LaptopIcon from "@mui/icons-material/Laptop";
//logos
import pythonLogo from "../../../static/python_logo.jpeg";
import javascriptLogo from "../../../static/javascript_logo.png";
import reactLogo from "../../../static/react_logo.png";
import djangoLogo from "../../../static/django_logo.png";
import linuxLogo from "../../../static/linux_logo.jpeg";
import boostrapLogo from "../../../static/bootstrap_logo.jpeg";
import muiLogo from "../../../static/mui_logo.png";
import postgresqlLogo from "../../../static/postgresql_logo.jpeg";
import celeryLogo from "../../../static/celery_logo.png";

const HomePage = () => {
  const baseAnimationProps = {
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
  };
  const imageAnimationProps = useSpring({
    ...baseAnimationProps,
    delay: 300,
  });
  const bioAnimationProps = useSpring({
    ...baseAnimationProps,
    delay: 600,
  });
  const aboutMeContentAnimationProps = useSpring({
    ...baseAnimationProps,
    delay: 900,
  });

  return (
    <>
      <Grid container alignItems="center" justifyContent="center" p={"1rem"}>
        <Grid item xs={12} md={4} align="center">
          <animated.div style={imageAnimationProps}>
            <Tooltip title="Haleakala National Park, USA ">
              <img
                src={portrait}
                alt="portrait"
                style={{
                  borderRadius: "50%",
                  height: "15rem",
                  justifyContent: "center",
                }}
              />
            </Tooltip>
          </animated.div>
        </Grid>
        <Grid item xs={12} md={8}>
          <animated.div style={bioAnimationProps}>
            <Grid container spacing={"1rem"}>
              <Grid item xs={12}>
                <Typography variant="h4">
                  Full-Stack Developer & Data Engineer
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Philip Fournier</Typography>
              </Grid>
              <BioDescription />
              <Grid item>
                <StyledButton
                  text="download resume"
                  onClick={() => window.open(resume, "_blank")}
                />{" "}
              </Grid>
              <Grid item>
                <StyledButton
                  text="contact on linkedin"
                  href="https://www.linkedin.com/in/philip-fournier-03a8b4150/"
                />{" "}
              </Grid>
            </Grid>
          </animated.div>
        </Grid>
      </Grid>

      <Grid container p={"1rem"} spacing={"1rem"}>
        <Grid item xs={12} md={4}>
          <animated.div style={aboutMeContentAnimationProps}>
            <BioSection
              icon={<SchoolIcon />}
              title={"Education"}
              content={<EducationContent />}
            />
          </animated.div>
        </Grid>
        <Grid item xs={12} md={4}>
          <animated.div style={aboutMeContentAnimationProps}>
            <BioSection
              icon={<DirectionsRunIcon />}
              title={"Sports and Hobbies"}
              content={<SportsAndHobbiesContent />}
            />
          </animated.div>
        </Grid>
        <Grid item xs={12} md={4}>
          <animated.div style={aboutMeContentAnimationProps}>
            <BioSection
              icon={<FavoriteIcon />}
              title={"Interests"}
              content={<InterestsContent />}
            />
          </animated.div>
        </Grid>
        <Grid item xs={12} md={12}>
          <animated.div style={aboutMeContentAnimationProps}>
            <BioSection
              icon={<LaptopIcon />}
              title={"Technical Knowledge"}
              content={
                <Grid container p={"1rem"} spacing={"2rem"}>
                  <TechItem image={pythonLogo} />
                  <TechItem image={javascriptLogo} />
                  <TechItem image={linuxLogo} />
                  <TechItem image={postgresqlLogo} />
                  <TechItem image={djangoLogo} />
                  <TechItem image={reactLogo} />
                  <TechItem image={celeryLogo} />
                  <TechItem image={boostrapLogo} />
                  <TechItem image={muiLogo} />
                </Grid>
              }
            />
          </animated.div>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
