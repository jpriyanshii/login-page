import { Button } from "@mui/material";
 import Google from "../Components/Assets/Google.jpg"

import React from "react";

const Btn = () => {
  return (
    <>
    <Button
      variant="contained"
      style={{
        backgroundColor: "white" ,s
        borderRadius: "50",
        color: "black",
      }}
    >Google
    </Button>
    </>
  );
};

export default Btn;
