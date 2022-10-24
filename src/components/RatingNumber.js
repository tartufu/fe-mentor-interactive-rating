import React from "react";

import Box from "@mui/material/Box";

export default function RatingNumber({ number, isSelected }) {
  return (
    <Box
      sx={{
        lineHeight: "2.5rem",
        width: "2.5rem",
        borderRadius: "50%",
        textAlign: "center",
        backgroundColor: isSelected ? "hsl(217, 12%, 63%)" : "#262F38",
        color: isSelected ? "hsl(0, 0%, 100%)" : "hsl(217, 12%, 63%)",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "hsl(25, 97%, 53%)",
          color: "hsl(0, 0%, 100%)",
        },
      }}
    >
      {number}
    </Box>
  );
}
