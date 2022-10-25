import "./App.css";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import RatingCardContainer from "./components/RatingCardContainer";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            height: "100vh",
          }}
        >
          <RatingCardContainer />
        </Box>
      </Container>
    </div>
  );
}

export default App;
