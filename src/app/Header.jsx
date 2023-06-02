"use client";
import Link from "next/link";
import Grid from "@mui/material/Grid";
const Header = () => {
  return (
    <Grid container spacing={16} justifyContent="space-between">
      <Grid item>
        <Link href={"/"}>Home</Link>
      </Grid>
      <Grid item>
        <Link href={"/Contact"}>Contact</Link>
      </Grid>
    </Grid>
  );
};
export default Header;
