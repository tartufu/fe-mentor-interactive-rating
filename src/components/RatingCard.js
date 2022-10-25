import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { ReactComponent as StarIcon } from "../resources/icon-star.svg";

import RatingNumber from "./RatingNumber";

export default function RatingCard({
  ratingSubmitted,
  setRatingSubmitted,
  ratingArr,
  ratingClickHandler,
}) {
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
          {ratingArr.map((rating) => (
            <RatingNumber
              key={rating.id}
              id={rating.id}
              number={rating.val}
              isSelected={rating.isSelected}
              ratingClickHandler={ratingClickHandler}
            />
          ))}
        </div>
        <div style={marginTopStyling}>
          <Button
            variant="contained"
            disableElevation
            onClick={() => setRatingSubmitted(!ratingSubmitted)}
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
  );
}
