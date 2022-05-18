import { TextField,Box } from "@mui/material";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  margin: 5px;
  width: 100%;
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

const StyledBox = styled(Box)`margin:10px;`

const CustomTextField = ({ label, messageValidation, ...props }) => {
  return (
    <StyledBox>
      <StyledTextField
        label={label}
        {...props}
        error={messageValidation}
        helperText={messageValidation ? messageValidation : null}
      />
    </StyledBox>
  );
};

export default CustomTextField;
