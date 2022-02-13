import { Button } from "@mui/material";

const StyledButton = (props) => {
  const defaultStyle = { borderRadius: "1rem" };
  return (
    <Button
      variant="outlined"
      style={Object.assign({}, defaultStyle, props.style)}
    >
      {props.text}
    </Button>
  );
};
export default StyledButton;
