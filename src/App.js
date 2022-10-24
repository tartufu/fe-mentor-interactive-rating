import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

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
          Hello World
        </Box>
      </Container>
    </div>
  );
}

export default App;
