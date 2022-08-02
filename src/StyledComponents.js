import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";
import Input from "@mui/material/Input";
import { styled } from "@mui/material/styles";

const PRIMARY_GREEN = "#39B54A";
export const SECONDARY_NAVY = "#2B5468";

export const PrimaryButton = styled(Button)(() => ({
  background: PRIMARY_GREEN,
  borderRadius: "30px"
}));

export const LoginInput = styled(Input)(() => ({
  border: "1px solid lightgreen",
  borderRadius: "5px",
  padding: "5px",
  margin: "0.5rem 0"
}));
