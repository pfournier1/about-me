import { Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const BioSection = (props) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {props.icon}
        <Typography>&nbsp;{`${props.title}`}</Typography>
      </AccordionSummary>
      <AccordionDetails>{props.content}</AccordionDetails>
    </Accordion>
  );
};

export default BioSection;
