import "./App.css";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import RatingCard from "./components/RatingCard";

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
          <RatingCard />
        </Box>
      </Container>
    </div>
  );
}

export default App;
