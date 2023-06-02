"use client";
import UserDetailsContext from "../UserDetailsContext";
import { useContext } from "react";
import Grid from "@mui/material/Grid";
const Contact = () => {
  const { userDetails } = useContext(UserDetailsContext);
  console.log(userDetails);
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"center"}
      spacing={2}
      margin={0}
    >
      {(userDetails || []).map(({ username, password }, ind) => {
        return (
          <Grid item key={ind}>
            <Grid container direction={"row"} spacing={2}>
              <Grid item>{username}: </Grid>
              <Grid item>{password}</Grid>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Contact;
