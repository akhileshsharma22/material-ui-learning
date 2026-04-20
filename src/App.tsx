import { Button, CssBaseline, TextField, Slider, Stack, Container } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

function App() {



  return (
    <Container maxWidth="xs">
      <Stack >
        <CssBaseline />
        <TextField />
        <Slider />
        <Button startIcon={<AutoAwesomeIcon />} variant="contained">
          Submit
        </Button>
      </Stack>
    </Container>
  )
}

export default App
