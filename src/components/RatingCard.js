import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { ReactComponent as StarIcon } from "../resources/icon-star.svg";
import RatingNumber from "./RatingNumber";

const marginTopStyling = { marginTop: "1rem" };

export default function RatingCard() {
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  return (
    <div className="rating-card-box">
      {ratingSubmitted && <p>asdasd </p>}
      <Box
        sx={{
          maxWidth: "400px",
          backgroundColor: "#171E28",
          borderRadius: "1rem",
          color: "white",
        }}
      >
        <Box sx={{ padding: "2rem" }}>
          <div>
            <StarIcon
              style={{
                padding: "0.5rem",
                borderRadius: "50%",
                backgroundColor: "#262F38",
              }}
            />
          </div>
          <div style={marginTopStyling}>
            <Typography variant="h5" component="h3" sx={{ fontWeight: "bold" }}>
              How did we do?
            </Typography>
          </div>

          <div style={marginTopStyling}>
            <Typography
              variant="p"
              component="p"
              sx={{ color: "hsl(217, 12%, 63%)" }}
            >
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1rem",
            }}
          >
            <RatingNumber number={1} isSelected={false} />
            <RatingNumber number={2} isSelected={false} />
            <RatingNumber number={3} isSelected={false} />
            <RatingNumber number={4} isSelected={false} />
            <RatingNumber number={5} isSelected={false} />
          </div>
          <div style={marginTopStyling}>
            <Button
              variant="contained"
              disableElevation
              onClick={() => alert("PING")}
              sx={{
                width: "100%",
                borderRadius: "1rem",
                backgroundColor: "hsl(25, 97%, 53%)",
                marginTop: "1rem",
                "&:hover": {
                  backgroundColor: "hsl(0, 0%, 100%)",
                  color: "hsl(25, 97%, 53%)",
                },
              }}
            >
              SUBMIT
            </Button>
          </div>
        </Box>
      </Box>
    </div>
  );
}
