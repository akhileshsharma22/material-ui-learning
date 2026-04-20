import { CssBaseline, Slider, Stack, Container } from '@mui/material'

function App() {



  return (
    <Container
    sx = {{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}
    maxWidth="xs">
      <Stack >
        <CssBaseline />
        <Slider
        disabled sx={{width:100,
           color:'success.main',
          //  ':hover':{
          //   backgroundColor:'yellow'
          //  },
          //  "& .MuiSlider-thumb" : {
          //   ":hover":{
          //     backgroundColor:"blue"
          //   },
          //   backgroundColor: "red",
          //  },
          "&.Mui-disabled" : {
            "& .MuiSlider-thumb" : {
              backgroundColor: "error.main",
            },
           },
        }}/>
      </Stack>
    </Container>
  )
}

export default App
