import ResponsiveAppBar from "./components/ResponsiveAppBar/ResponsiveAppBar";
import { Paper, Box } from "@mui/material";
import { useState } from "react";
import HomePage from "./components/Pages/HomePage/HomePage";
import ProjectPage from "./components/Pages/ProjectsPage/ProjectsPage";
import ResumePage from "./components/Pages/ResumePage/ResumePage";

const App = () => {
  const pages = ["Home", "Projects", "Resume"];
  const [page, setPage] = useState(pages[0]);

  const onChangePage = (props) => {
    console.log(props);
    console.log(props.target.value);
    setPage(props.target.value);
  };
  return (
    <Box m={"1rem"} p={"1rem"}>
      <Paper>
        <ResponsiveAppBar pages={pages} onChangePage={onChangePage} />
        {page === "Home" ? (
          <HomePage />
        ) : page === "Projects" ? (
          <ProjectPage />
        ) : page === "Resume" ? (
          <ResumePage />
        ) : (
          <></>
        )}
      </Paper>
    </Box>
  );
};

export default App;
