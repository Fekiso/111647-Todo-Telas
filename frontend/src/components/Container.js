import { Grid } from "@mui/material";



const CustomContainer = ({ ...props }) => {
  return <Grid item xs={12} md={9.5} {...props}></Grid>

};

export default CustomContainer;
