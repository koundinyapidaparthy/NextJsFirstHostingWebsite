"use client";
import { useContext, useState } from "react";
import UserDetailsContext from "./UserDetailsContext";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const DefaultPage = () => {
  const { setUserDetails } = useContext(UserDetailsContext);
  const [state, setState] = useState({});
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
      margin={0}
    >
      <Grid item>
        <TextField
          name="name"
          id="name"
          label="Name *"
          type="text"
          onChange={(event) => {
            setState((prev) => ({ ...prev, username: event.target.value }));
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          name="passsword"
          id="password"
          label="Password *"
          type="password"
          onChange={(event) => {
            setState((prev) => ({ ...prev, password: event.target.value }));
          }}
        />
      </Grid>
      <Grid item>
        <Button
          onClick={() => {
            setUserDetails((prev) => [...(prev || []), state]);
          }}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};
export default DefaultPage;
