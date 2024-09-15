import { Button } from "@mui/material";
import Ggl from "../Components/Assets/Google.jpg"
import React from "react";

const Btn = () => {
  return (
    <>
    <Button
      variant="contained"
      style={{
        backgroundColor: "white" ,
        borderRadius: "50",
        color: "black",
      }}
    >Ggl
    </Button>
    </>
  );
};

export default Btn;
