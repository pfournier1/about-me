import { Button } from "@mui/material";

const StyledButton = (props) => {
  return (
    <Button variant="contained" {...props}>
      {props.text}
    </Button>
  );
};
export default StyledButton;
