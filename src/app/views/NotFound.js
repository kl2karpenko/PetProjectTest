import React from "react";
import {
  Link
} from 'react-router-dom'

import { Typography } from "@material-ui/core";

export default function NotFound() {
  return (
    <Typography variant={"h4"} align={"center"}>Not Found Page, please go to the <Link to={"/"}>Main Page</Link></Typography>
  );
}