import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Vite.js example in TypeScript
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
