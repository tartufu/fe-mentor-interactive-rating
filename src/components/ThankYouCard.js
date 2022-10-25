import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { ReactComponent as ThankYouIcon } from "../resources/illustration-thank-you.svg";

export default function ThankYouCard({ rating }) {
  const marginTopStyling = { marginTop: "1rem" };

  return (
    <Box
      sx={{
        maxWidth: "400px",
        backgroundColor: "#171E28",
        borderRadius: "1rem",
        color: "white",
      }}
    >
      <Box
        sx={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ThankYouIcon />
        <div style={marginTopStyling}>
          <Typography
            variant="p"
            component="p"
            sx={{
              color: "hsl(25, 97%, 53%)",
              backgroundColor: "#262F38",
              padding: "0.25rem 1rem",
              borderRadius: "1rem",
            }}
          >
            You selected {rating} out of 5
          </Typography>
        </div>

        <div style={marginTopStyling}>
          <Typography variant="h5" component="h3" sx={{ fontWeight: "bold" }}>
            Thank you!
          </Typography>
        </div>

        <div style={marginTopStyling}>
          <Typography
            variant="p"
            component="p"
            sx={{ color: "hsl(217, 12%, 63%)" }}
          >
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </Typography>
        </div>
      </Box>
    </Box>
  );
}
